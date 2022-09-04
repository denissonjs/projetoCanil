# projetoCanil
Aprendendo NodeJS e TypeScript

# Pré-Requisitos do projeto:
Nodemon: 
TypeScript:
ts-node:
`npm i -g nodemon typescript ts-node`

# Ferramentas do projeto
- Servidor: Express
- Gerenciador de Templates: Mustache
- Váriáveis de ambiente: DotEnv 
    `npm install express mustache-express dotenv`

# Ferramentas Dev. do projeto
 `npm install --save-dev @types/express @types/mustache-express @types/node`

# Para Rodar o Projeto
 `npm run start-dev`

# Manipular Versões do Projeto
- Clonar: `git clone caminho-ou-url-do-projeto`
- Ver Status: `git: status`
- Adicionar todas Modif. ao Repositorio: `git add .`
- Adicionar uma Modif. ao Reporitorio: `git add arq-da-modif`
- Commit: `git commit -m "descrição do commit"`
- Adicionar Reposit. de Origem: `git remote add origin url-do-repositorio`
- Empurrar Commit para repositorio de origem: `git push -f origin main`


# Iniciar projeto
    * Iniciar NPM: npm init -y
    * Iniciar TS: tsc --init

# Config. Atalho Start-Dev

    1 - Cria uma linha na área de Scripts do arquivo packga.json: "nome-do-atalho": "ação do atalho"
    ex.: "star-dev" : "nodemon -e ts,json,mustache src/server.ts"

# Configurações 'tsconfig.json'

        Configurações do TS:
        - "target": "es6"
        - "rootDir": "./src" (Precisa criar pasta)
        - "outDir": "./dist" (Precisa criar pasta)
        - "moduleResolution": "node"
    
# Criação de Pastas

    * Criar pastas: mkdir src dist
    * Criar arquivos: type > src/server.ts

# Configurando o Servidor

# Erros e soluções
- tsconfig
    JSON schema for the TypeScript compiler's configuration file: Você criou um arquivo 'index.js' fora da pasta src, que foi a pasta que vc informou através do 'rootDir' que estava o index. Solução, redirecionar o rootDir para onde está o index.ts, ou colocar o index.ts onde vc direcionou o rootDir.