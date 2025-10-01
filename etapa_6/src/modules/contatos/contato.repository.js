import { eq } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import dbPool from "../../infra/database.js";
import { contatos } from "../../infra/db/schema.js";

export class ContatoRepository {
  constructor() {
    this.db = dbPool;
  }

  async findAll() {
    return await this.db.select().from(contatos);
  }

  async findById(id) {
    return await this.db.select().from(contatos).where(eq(contatos.id, id));
  }

  async create(contatoData) {
    const id = randomUUID();
    const result = await this.db
      .insert(contatos)
      .values({
        id, // ID gerado automaticamente
        ...contatoData, // Demais campos vindos do parâmetro
      })
      .returning(); // Retorna o registro inserido
    return result[0];
  }

  async update(id, contatoData) {
    const result = await this.db
      .update(contatos)
      .set(contatoData) // Define os novos valores
      .where(eq(contatos.id, id)) // Filtra pelo ID
      .returning(); // Retorna o registro atualizado
    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db
      .delete(contatos)
      .where(eq(contatos.id, id))
      .returning({ id: contatos.id }); // Pede o ID do item deletado de volta

    return result.length > 0;
  }

  // Busca um contato pelo e-mail (útil para evitar duplicidade)
  async findByEmail(email) {
    const result = await this.db
      .select()
      .from(contatos)
      .where(eq(contatos.email, email));
    return result[0] || null;
  }
}
