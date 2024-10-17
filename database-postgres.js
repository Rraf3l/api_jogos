import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listjogos() {
    const jogos = await sql`select * from jogos`;
    return jogos;
  }

  async createjogo(jogo) {
    const id = randomUUID();
    console.log('id', id);
    const name = jogo.name;
    const genero = jogo.genero;
    const espaco_armazenamento = jogo.espaco_armazenamento;
    const data_lancamento = jogo.data_lancamento;
    const versao = jogo.versao;
    
    await sql`insert into jogos (id, name, genero, espaco_armazenamento, data_lancamento, versao)
    values (${id}, ${name}, ${genero}, ${espaco_armazenamento}, ${data_lancamento}, ${versao})`
  }

  async updatejogo(id, jogo) {
    const name = jogo.name;
    const genero = jogo.genero;
    const espaco_armazenamento = jogo.espaco_armazenamento;
    const data_lancamento = jogo.data_lancamento;
    const versao = jogo.versao;

    await sql`update jogos set 
        name = ${name},
        genero = ${genero},
        espaco_armazenamento = ${espaco_armazenamento},
        data_lancamento = ${data_lancamento},
        versao = ${versao}
        where id = ${id}
    `;
  }

  async deletejogo(id) {
    await sql`delete from jogos where id = ${id}`
  }

}