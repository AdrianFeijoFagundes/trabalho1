const readlineSync = require('readline-sync')

const donatorsDB = [
    { nome: 'João da Silva', idade: 25, peso: 70, tipoSanguineo: 'AB-', ultimaDoacao: '01/01/2022'  },
    { nome: 'Maria Santos', idade: 35, peso: 65, tipoSanguineo:'A+', ultimaDoacao: '03/02/2022'},
    { nome: 'José Almeida', idade: 45, peso: 80, tipoSanguineo: 'O+', ultimaDoacao: '10/01/2022'  },
    { nome: 'Ana Oliveira', idade: 27, peso: 58, tipoSanguineo: 'B-', ultimaDoacao: '22/04/2022'  },
    { nome: 'Carlos Silva', idade: 30, peso: 75, tipoSanguineo: 'A-', ultimaDoacao: '14/03/2022'  }
]
// função que adiciona um novo doador
function addDonator(nome, idade, peso, tipoSanguineo, ultimaDoacao) {
    const donor = { nome: nome, idade: idade, peso: peso, tipoSanguineo: tipoSanguineo, ultimaDoacao: ultimaDoacao }
    donatorsDB.push(donor)
}
function optionsInterface() {
    console.log(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por tipo sanguíneo\n4. Buscar doador por data da última doação\n5. Sair`)
}
// listInteface monta uma tabela com todos os doadores do array passado como parametro
function listInterface(donatorsArray) {   
    console.log(`NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO`)
    console.log(`-----------------------------------------------------------------`)
    for (let i = 0; i < donatorsArray.length; i++) {
        console.log(`${donatorsArray[i].nome}     |  ${donatorsArray[i].idade}   |  ${donatorsArray[i].peso}  |      ${donatorsArray[i].tipoSanguineo}       |   ${donatorsArray[i].ultimaDoacao} `)
    } 
    console.log(`-----------------------------------------------------------------`)
}
// recebe um array e o tipo sanguineo em formato de string 
function filterByBloodType(donatorsArray, bloodType) {
    const filtered = []
    for (let i = 0; i < donatorsArray.length; i++) {
        if (donatorsArray[i].tipoSanguineo.includes(bloodType)) {
            filtered.push(donatorsArray[i])
        }
    } 
    return filtered
}
// inverte uma data com formato DD/MM/AAAA para AAAAMMDD, com isso podemos descobrir se uma data é antes ou depois da outra de maneira mais fácil
function reverseDate(date) {
    return date.split('/').reverse().join('')
}
// recebe um array(donatorsArray) e uma data de parametro(donationDate) retornando um array com todos os itens com a data igual ou menor que a data passada por parametro
function filteByDonationDate(donatorsArray, donationDate) {
    const filtered = []
    for (let i = 0; i < donatorsArray.length; i++) {
        if (reverseDate(donationDate) >= reverseDate(donatorsArray[i].ultimaDoacao)) {
            filtered.push(donatorsArray[i])
        }
    } 
    return filtered
}

let option = ''
optionsInterface()
while(option !== '5') {
    option = readlineSync.question('Escolha uma opcao: ')
    switch(option) {
        case '1':
            const nome = readlineSync.question('Nome do doador a ser cadastrado: ')
            const idade = Number(readlineSync.question('Peso: '))
            const peso = Number(readlineSync.question('Idade: '))
            const tipoSanguineo = readlineSync.question('Tipo sanguineo: ')
            const ultimaDoacao = readlineSync.question('Data da última doacao (dd/mm/aaaa): ')
            addDonator(nome, idade, peso, tipoSanguineo, ultimaDoacao)
            break
        case '2':
            console.log(`--------------------\nLISTAGEM DE DOADORES:\n--------------------`)
            listInterface(donatorsDB)
            break
        case '3':
            const bloodType = readlineSync.question('Qual tipo sanguineo deseja buscar: ').toUpperCase()
            console.log(`--------------------\nRESULTADO DA BUSCA:\n--------------------`)
            listInterface(filterByBloodType(donatorsDB, bloodType))
            break
        case '4':
            const donationDate = readlineSync.question('deseja buscar doacoes ate qual data? dd/mm/aaaa ')
            console.log(`--------------------\nRESULTADO DA BUSCA:\n--------------------`)
            listInterface(filteByDonationDate(donatorsDB, donationDate))
            break
        case '5':
            console.log('encerrando programa')
            break    
        default:
            console.log('digite um valor válido')
            break
    }
    if (readlineSync.question('Deseja ver o menu novamente? S/N ').toUpperCase() === 'S') {
        optionsInterface()
    }
}