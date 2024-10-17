import { sql } from './db.js'

sql`
  CREATE TABLE jogos (
      id text PRIMARY KEY,
      name character varying(255),
      genero character varying(255),
      espaco_armazenamento int,
      data_lancamento date,
      versao character varying(255)
      
  );
`.then(() => {
  console.log('tabela criada');
})