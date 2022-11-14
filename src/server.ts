import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

// PRIMEIRA FUNÇÃO QUE SERÁ EXECUTADA NO PROJETO. O FASTIFY É O QUE VAI HOSPEDAR A APLICAÇÃO E O LOGGER SÃO OS LOGS
async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  // PRIMEIRA ROTA DA APLICAÇÃO = CONTADOR DE BOLÃO
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();
    return { count };
  });

  await fastify.listen({ port: 3333 });
}

bootstrap();
