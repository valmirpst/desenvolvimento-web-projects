export class ContatoService {
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;
  }

  getAllContatos() {
    return this.contatoRepository.findAll();
  }

  getContatoById(id) {
    return this.contatoRepository.findById(id);
  }

  getContatoByEmail(email) {
    return this.contatoRepository.findByEmail(email);
  }

  createContato(contatoData) {
    if (!contatoData || contatoData.nome.length < 3) return null;

    return this.contatoRepository.create(contatoData);
  }

  updateContato(id, contatoData) {
    return this.contatoRepository.update(id, contatoData);
  }

  deleteContato(id) {
    return this.contatoRepository.remove(id);
  }
}
