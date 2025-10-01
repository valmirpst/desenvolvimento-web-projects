CREATE TABLE "contatos" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"telefone" text,
	CONSTRAINT "contatos_email_unique" UNIQUE("email")
);
