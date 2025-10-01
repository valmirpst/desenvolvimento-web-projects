export class ContatoController {
  constructor(contatoService) {
    this.contatoService = contatoService;
  }

  async getContatos(request, reply) {
    const contatos = await this.contatoService.getAllContatos();
    return reply.send(contatos);
  }

  async getContatoById(request, reply) {
    const { id } = request.params;
    const contato = await this.contatoService.getContatoById(id);

    if (!contato) {
      return reply.code(404).send({ message: "Contato não encontrado" });
    }
    return reply.send(contato);
  }

  async createContato(request, reply) {
    const novoContato = await this.contatoService.createContato(
      JSON.parse(request.body)
    );
    return reply.code(201).send(novoContato);
  }

  async updateContato(request, reply) {
    const { id } = request.params;
    const contatoAtualizado = await this.contatoService.updateContato(
      id,
      JSON.parse(request.body)
    );

    if (!contatoAtualizado) {
      return reply.code(404).send({ message: "Contato não encontrado" });
    }
    return reply.send(contatoAtualizado);
  }

  async deleteContato(request, reply) {
    const { id } = request.params;
    const sucesso = await this.contatoService.deleteContato(id);

    if (!sucesso) {
      return reply.code(404).send({ message: "Contato não encontrado" });
    }
    return reply.code(204).send();
  }
}
