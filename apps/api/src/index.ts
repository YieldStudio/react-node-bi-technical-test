import createFastifyServer from "@/server";

const start = async () => {
  const server = await createFastifyServer();
  await server.listen({ host: process.env.APP_HOST, port: process.env.APP_PORT });
};

// eslint-disable-next-line no-void
void start();
