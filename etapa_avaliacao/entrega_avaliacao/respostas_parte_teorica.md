# Respostas da parte teórica

> Valmir Paiva Stachin - 2441195

1. c
2. b
3. A testabilidade é melhorada na Etapa 3, com injeção de dependência, pois ela permite que os componentes/arquivos sejam testados de maneira isolada, o que facilita a criação de testes unitários e fica mais fácil de encontrar onde estão os problemas. Dessa maneira, cada camada não depende diretamente de outra camada, mas de uma interface que define o que ela precisa fazer. Por exemplo, podemos ter um Repository que PRECISA ter um método getAll(). Dessa maneira, podemos implementar qualquer tipo de Repository, que tenha o método getAll(), com qualquer tecnologia, que continuará funcionando nas outras camadas e poderá ser testado isolado.
4. d
5. a
6. d
7. DELETE /api/contatos/:id

- A camada Routes define a rota na aplicação e a disponibiliza para ser chamada, que será enviada para o Controller fazer a gestão da requisição. Nesse caso, ela só será executada quando o usuário fizer uma requisição passando o id para /api/contatos/id
- A camada Controller recebe a requisição, extrai o id recebido e chama o Service (passando o id)
- A camada Service recebe o id do Controller, realiza as validações e regras de negócio necessárias e chama o Repository (passando o id)
- Por fim, a camada Repository recebe o id do Service e deleta o contato do banco de dados (essa é a única camada que "fala" diretamente com o banco)

8. d
9. c
10. c
