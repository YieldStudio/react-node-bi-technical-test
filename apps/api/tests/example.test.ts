import { test, expect } from 'vitest';
import createFastifyServer from "@/server";

test('GET / should return status OK', async () => {
  const server = await createFastifyServer();

  const response = await server.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual('Hello world');
});
