import fastify from "fastify";
import { contatoRoutes } from "./modules/contatos/contato.routes.js";

const server = fastify({ logger: true });
const port = 3000;

// Registramos nosso plugin de rotas e adicionamos um prefixo a todas elas
server.register(contatoRoutes, { prefix: "/api" });

// Iniciar o Servidor
server.listen({ port }, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
    process.exit(1);
  }
  console.log("Servidor executando na porta ", port);
});
