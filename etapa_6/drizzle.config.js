import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/infra/db/schema.js",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
