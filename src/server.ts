import Fastify from "fastify";

// PRIMEIRA FUNÇÃO QUE SERÁ EXECUTADA NO PROJETO. O FASTIFY É O QUE VAI HOSPEDAR A APLICAÇÃO E O LOGGER SÃO OS LOGS
async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  // PRIMEIRA ROTA DA APLICAÇÃO = CONTADOR DE BOLÃO
  fastify.get("/pools/count", () => {
    return { count: 0 };
  });

  await fastify.listen({ port: 3333 });
}

bootstrap();
