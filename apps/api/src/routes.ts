import { Container } from '@/container';
import type { FastifyInstance } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

export default async function routes(instance: FastifyInstance) {
  const app = instance.withTypeProvider<ZodTypeProvider>();

  app.get('/', async () => {
    return 'Hello world';
  });

  app.get('/example', async () => {
    const data = await Container.db.runAndReadAll(
      `SELECT * FROM '${Container.dataPath}/clicks.parquet' LIMIT 10`
    );

    return data.getRowObjectsJson();
  });
}
