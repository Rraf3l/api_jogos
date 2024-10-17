
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/jogos', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createjogo(body);
    return reply.status(201).send();
})

// READE
server.get('/jogos', async () => {
    const jogos = await databasePostgres.listjogos();
    return jogos;
});

// UPDATE
server.put('/jogos/:id', async (request, reply) => {
    const jogoID = request.params.id;
    const body = request.body;
    await databasePostgres.updatejogo(jogoID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/jogos/:id', async (request, reply) => {
    const jogoID = request.params.id;
    await databasePostgres.deletejogo(jogoID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
