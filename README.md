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
- Comando pra instalar:  `npm install express mustache-express dotenv`

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
- Adicionar um Reposit. de Origem: `git remote add origin url-do-repositorio`
- Criar nova Branch para o repositorio de origem (principal): git branch main
- Empurrar Commit para repositorio de origem: `git push -f origin main`


# Iniciar projeto
- Iniciar NPM: `npm init -y`
- Iniciar TS: `tsc --init`

# Config. Atalho Start-Dev

    1 - Cria uma linha na área de Scripts do arquivo packga.json: "nome-do-atalho": "ação do atalho"
    ex.: "star-dev" : "nodemon -e ts,json,mustache src/server.ts"

# Configurações 'tsconfig.json'

    - "target": "es6"
    - "rootDir": "./src" (Precisa criar pasta)
    - "outDir": "./dist" (Precisa criar pasta)
    - "moduleResolution": "node"
    
# Criação de Pastas
- Criar pastas de arquivos TS (src e dist): `mkdir src dist` 
- Pasta de arquivos publicos: `mkdir public`
- Pasta auxiliar (onde fica o html): `mkdir _html`
    Na pasta auxiliar ficam o arquivo html pra nos auxiliar nos primeiro momento (pra converter os hmtl pra mustache, assim como o TS é convertido pra JS no final), as imagens e estilos ficam na pasta de arquivos publicos, ou seja, na pasta 'public'. Terminado o projeto, a pasta auxiliar não é mais necessária.
- Criar pasta para os views do mustache (dentro do servidor): `mkdir src/views`
- Criar subpastas pages e partials dentro de views para separar o body (que sempre muda) do header e footer (que são sempre iguais) dos arquivos mustache: `mkdir pages partials`
- Criar pasta 'routes' dentro de src, visando organização do projeto: `mkdir src/routes`
- Criar pasta controllers, para armazenar os controllers de rotas: `mkdir src/controllers`

# Configurando o Servidor
- Criar arquivo de Servidor: `type > src/server.ts`

- Importando Arquivos
    * express from 'express'
    * dotenv from 'dotenv'
    * mustache from 'mustache-express'
    * path from 'path'

- Configurando variável da porta e porta
    * Criar arquivo '.env' na pasta
    * Definir porta (no arquivo '.env'): PORT=numero-da-porta

- Primeiras configurações do Servidor (dontEnv, Express, Mustache, pasta estatica)

    * Chamando donEvnt: dotenv.config();
    * Declarar servidor (express): const = express();
    * Template engine: server.set('view engine', 'mustache');
    * Definindo pasta de visualização do projeto: server.set('views', path.join(__dirname, 'views'))
    * Obs.: Criar pasta direcionada pelo dirname acima (no caso, 'views'): `mkdir views`
    * Chamando a função mustache: server.engine('mustache', mustache());
    * Definindo pasta de arquivos estaticos(public): server.use(express.static(pach.join(__dirname, '../public')));
    * Rodar servidor: server.listen(process.env.PORT)

# Criando Rotas
- Criar arquivo de rotas na pasta de rotas: `type nul > src/routes/index.ts`
- Importar gerenciador de rotas do express: import {Router} from 'express'
- Declarar gerenciador de rotas: const router = Router()

- Definindo rotas da pagina (home, dogs, cats, fishes: router.get('/', PageController.home)
    - Obs: Pra não ficar mostrando erro nas linhas, crie os controllers, ou ignore e siga as próximas etapas até chegar no tópico de controllers.
- Definindo a rota da pagina 'busca': router.get('/search', SearchController.search)
- Exportando rota/rotas: export default router

- Importando rota criada no servidor principal (arquivo server.ts): import mainRoutes from '.routes/index'
- Definindo servidor de rotas no servidor principal (em server.ts): server.use(mainRoutes);
- Definindo 404 - not found: server.use((req, res)=>{res.send('Pagina não encontrada')})

# Criando Controllers
- Visto que as quatro paginas de animais serão a mesma coisa, podemos usar somente um controlador pra elas. Como a unica pagina diferente é a da pesquisa, podemos criar um só pra ele, sendo assim, criamos somente dois controllers: `type nul > controller/pageController.ts` e `type nul > controller/searchController.ts`.
- Estrutura dos controllers: 
    * Import request e response
    * Criação das consts das paginas home, dogs, cats, fishes (monstrando só a linha de home, repetir para as demais): const home = (req: Request, res:Response) => {}
    * Exportação da const: É só colocar o export antes do const (export const home....)
    * Importação dos controllers no arquivo de rotas: import * as nome-do-arquivo from 'caminho-do-arquivo';
    * Testando se funcionou (Direcionando a primeira rota pra uma pagina de teste): res.send('home no controller!');

# Configurando as Viewers
- Criar arquivos mustache na pasta views:    
    * Arquivos partials (footer e header): `type nul > footer.mustache` e `type nul > header.mustache`
    * Inserir o código Html nos arquivos mustache, o footer no arquivo footer, header no header.
    * Fazer alterações (se houverem) para adaptar por exemplo, o caminho de imagens (antes poderia ser img/teste, agora pode ser ../img/teste), links etc. no novo destino do 'html' que agora é mustache.

    * Arquivos de pages:
        Obs.: Como todas as paginas tem a mesma estrutura, só basta um arquivo para as paginas, sendo assim: `type nul > views/page.mustache`
    * Importar no arquivo page, footer e header:
        - No fim do codigo: {{>partials/footer}}
        - No inicio do código: {{>partials/header}}
    * Uma vez configurado, pode chamar a renderização no controller das pages, pelo menos a home, estará funcionando: res.render('pages/page')
    
# Dinamizando as paginas
- Define o objeto 'banner' nas pageControllers com o titulo que vai ficar e a imagem que vai receber: res.render('pages/page', {banner:{title: 'titulo', background: 'imagem'}}).
- No header.mustache: Adicionar a 'condição' banner, para validar que aquele trecho se refere ao objeto banner: {{#banner}} codigo mustache/html {{/banner}}
- Pra 'dinamizar' as paginas é só ir no arquivo mustache é só substituir o nome da imagem pelo objeto 'background' do banner e o titulo pelo objeto 'titulo' do banner: 
# Erros e soluções
- tsconfig
    JSON schema for the TypeScript compiler's configuration file: Você criou um arquivo 'index.js' fora da pasta src, que foi a pasta que vc informou através do 'rootDir' que estava o index. Solução, redirecionar o rootDir para onde está o index.ts, ou colocar o index.ts onde vc direcionou o rootDir.

- Servidor não encontra o express
    Na importação no arquivo de servidor (server.ts) você importou 'Express' com 'E' maiúsculos, o express servidor tem o 'e' minúsculo.

- Module_not_found
    * Problema: Ao executar o 'start-dev' retornava o erro de modulo não encontrado.
    * Possíveis causas: 
        - Espaço entre as extenções "ts, json, mustache". Não pode ter espaço.
        - Nodemon ou outro modulo/dependencia não foi instalado.
    * Diagnóstico:
        - Usado npm e npx no start dev e retornando mesmo erro;
        - Usado o comando de atalho puro, sem o start dev. Retornou: "nodemon" não existe;
        - Tentado usar o nodemon puro (nodemon pasta/arquivo.ts) retornou que nodemon não existe;
    * Conclusão: assim como os ts e o node em si, os modulos só estão sendo executados com o npx.    
    * Solução: Ao invés de rodar somente "nodemon -e ts,json,mustache src/server.ts", rodar "npx nodemon -e ts,json,mustache src/server.ts"
