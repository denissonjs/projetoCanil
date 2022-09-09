type PetType = 'dog' | 'cat' | 'fish'; // Type criado pra não ficar repetindo a mesma linha de codigo sempre que quiser usar o type dog, cat fich...
type pets = { // Tipo de pets é objeto
    type: PetType, // definindo que tipo de pet só pode ser um desses setados.
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino'
}

// A partir de agora, vamos preencher nosso 'Banco de Dados' que armazenará os dados dos animais.

const dataBase: pets[] = 
    [
        {
            type: 'dog', // Tipo do animal
            image: 'pastor-alemao.jpg', // Nome da imagem do animal na pasta
            name: 'Pastor-alemão',
            color: 'Amarelo e Preto',
            sex: 'Masculino' // Só aceita masculino ou feminino.
        },
        {
            type: 'dog',
            image: 'labrador.jpg',
            name: 'Labrador-retriever',
            color: 'Branco',
            sex: 'Masculino'
        },
        {
            type: 'dog',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            sex: 'Feminino'
        },
        {
            type: 'dog',
            image: 'husky.jpg',
            name: 'Husky Siberiano',
            color: 'Branco e Preto',
            sex: 'Masculino'
        },
        {
            type: 'dog',
            image: 'golden.jpg',
            name: 'Golden Retriever',
            color: 'Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'dog',
            image: 'poodle.jpg',
            name: 'Poodle',
            color: 'Branco',
            sex: 'Feminino'
        },
        {
            type: 'dog',
            image: 'bulldog.jpg',
            name: 'Bulldog',
            color: 'Branco e Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'cat',
            image: 'persa.jpg',
            name: 'Persa',
            color: 'Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'cat',
            image: 'mainecoon.jpg',
            name: 'Maine Coon',
            color: 'Preto e Branco',
            sex: 'Masculino'
        },
        {
            type: 'cat',
            image: 'bengal.jpg',
            name: 'Bengal',
            color: 'Branco, Preto e Amarelo',
            sex: 'Feminino'
        },
        {
            type: 'cat',
            image: 'siames.jpg',
            name: 'Siamês',
            color: 'Amarelo e Preto',
            sex: 'Masculino'
        },
        {
            type: 'cat',
            image: 'sphynx.jpg',
            name: 'Sphynx',
            color: 'Branco',
            sex: 'Masculino'
        },
        {
            type: 'fish',
            image: 'neon.jpg',
            name: 'Tetra Neon',
            color: 'Vermelho e Azul',
            sex: 'Masculino'
        },
        {
            type: 'fish',
            image: 'matogrosso.jpg',
            name: 'Mato Grosso',
            color: 'Laranja',
            sex: 'Masculino'
        },
        {
            type: 'fish',
            image: 'limpavidro.jpg',
            name: 'Limpa Vidro',
            color: 'Verde e Branco',
            sex: 'Masculino'
        },
        {
            type: 'fish',
            image: 'tanictis.jpg',
            name: 'Tanictis',
            color: 'Vermelho',
            sex: 'Masculino'
        },
        {
            type: 'fish',
            image: 'acara.jpg',
            name: 'Acará Bandeira',
            color: 'Preto',
            sex: 'Masculino'
        },
    ]

export const pets = {
    getAll: ()=>{ // Função que vai retornar todos os animais do nosso db.
        return dataBase;
    },
    getFromType: (type: PetType): pets[] => { // Função que vai filtrar nosso animais por tipo.
        return dataBase.filter(item => { // Instrução do filtro, se fosse em um DB SQL por exemplo, seria o select from where... Onde 'item' é o nome que eu dei ao elemento que eu quero filtrar (se vai no array vou ter dog, cat, fish)
            if(item.type === type){ // Aqui eu digo se o tipo do elemento que eu filtrei for igual ao tipo que está no array, retorne true, ou seja (Se o tipo for dog, todos os dogs ficam true)
                return true;
            }
            else{
                return false; // Aqui eu digo que todos os outros vão ser false, ou seja, não vão aparecer.
            }
        })
    },
    
    /* A função getFromType pode ser simplificada
        Original: 
        getFromType: (type: PetType): pets[] => {
        return dataBase.filter(item => {
            if(item.type === type){
                return true;
            }
            else{
                return false;
            }
        })    

        - Como eu tenho somente um if que vai me retornar ou true ou false eu posso retornar ele mesmo.
        getFromType: (type: PetType): pets[] => {
        return dataBase.filter(item => {
            return(item.type === type)
        }) 
        
        - Como agora só tenho um return dentro da condição, eu posso retornar ela dentro do primeiro return. Veja como ficou:
        getFromType: (type: PetType): pets[] => {
        return dataBase.filter(item => item.type === type)             
    }
    */

    getFromName: (name: string): pets[] => { // Name é o nome que o usuário vai pesquisar.
        return dataBase.filter(item => (item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) // Se o index do nome que o usuário pesquisou for maior que -1 ou seja, a partir de zero, significa que ele existe e você coloca ele como true, se tiver mais de um ele vai colocar cim true também, fazendo com que mostre todos daquele filtro.
        // Transformamos tudo pra minusculo para casi de validação, se for digitado com letra maiuscula ou minuscula ele acha, pois no fim tudo estará minusculo afinal.
        )
    }
}