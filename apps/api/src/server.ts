import Fastify from 'fastify';
import cors from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { DuckDBInstance } from '@duckdb/node-api';
import { Container } from '@/container';
import routes from '@/routes';


const createFastifyServer = async () => {
  const app = Fastify({
    logger: true,
  });

  try {
    app.setValidatorCompiler(validatorCompiler);
    app.setSerializerCompiler(serializerCompiler);

    const dbConnection = await (await DuckDBInstance.create(':memory:')).connect();

    Container.init(dbConnection, process.env.DATA_PATH);

    await app.register(cors, {
      origin: '*',
    });

    await app.register(routes);

    return app;
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

export default createFastifyServer;
