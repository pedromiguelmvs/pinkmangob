<p align="center">
   <img src="https://i.imgur.com/m2qhrGe.png" width="200"/>
</p>

# PinkMango - Backend





[![Author](https://img.shields.io/badge/author-PedroMiguel-D54F44?style=flat-square)](https://github.com/pedromiguelmvs)


> Especializados em fazer da sua vida mais doce.

<br />
<p align="center"><img src="https://i.imgur.com/XeeSWk9.png"/></p>

---

# :pushpin: Indice

* [Considerações Iniciais](#paintbrush-considerações-iniciais)
* [Features](#rocket-features)
* [Rodando o projeto](#runner-rodando-o-projeto)

# :paintbrush: Considerações iniciais

Antes de começar, quero esclarecer que, por motivos de organização, este projeto foi dividido em duas partes: __frontend__ e __backend__. O frontend pode ser acessado [clicando aqui](https://github.com/pedromiguelmvs/pinkmangob).

# :rocket: Features

Projeto feito com PostgreSQL, TypeScript, Express, React e Sass.

* 👤 Crie novos usuários através de um belo formulário com validação dinâmica.
* 🎟️ Manuseie novos registros através do __MangoAdmin__.
* 🔎 Pesquise pelos usuários que já solicitaram cadastro na plataforma.

# :runner: Rodando o projeto

Primeiro, você deve clonar o repositório do projeto:

```git clone https://github.com/pedromiguelmvs/pinkmangob```

Após isso, entre na pasta do projeto:

```cd pinkmangob```

Feito isso, instale as dependências do projeto.

```yarn install```

ou

```npm install```

Para armazenar os dados localmente utilizei um container no docker (é necessário tê-lo instalado). Caso você não possua a imagem do postgres instalada rode o seguinte comando:

```docker pull postgres```

Eu também criei uma pasta em ```/tmp``` para os dados persistirem (caso você não siga este passo, seus dados podem ser perdidos depois que desativar o container):

```mkdir /tmp/pinkmangodb```

Feito isso, rode o seguinte comando:

```docker run -p 5432:5432 -v /tmp/pinkmangodb:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres```

Nossa base de dados já está disponível! Agora, se você seguiu todos os passos corretamente até aqui, basta criar um arquivo ```ormconfig.json``` na raiz do projeto contendo o seguinte conteúdo:

```
{
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "1234",
   "database": "postgres",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```

Pronto! Rode o projeto:

```yarn start```

ou

```npm run start```
