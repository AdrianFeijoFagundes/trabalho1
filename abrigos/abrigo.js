const readlineSync = require('readline-sync')

const database = [
    {name: 'Casa do Caminho', address: 'Rua do Amanhecer, 123, Centro', phone: '(11) 1234-5678', capacity: 20 , city: 'Canoas'},
    {name: 'Abrigo Esperança' , address: 'Rua da Solidariedade, 321, Bairro' , phone: '(11) 9876-5432', capacity: 30 , city: 'São Leopoldo'},
    {name: 'Casa dos Amigos' , address: 'Av. da Fraternidade, 456, Centro', phone: '(11) 5555-4444', capacity: 25, city:  'Novo Hamburgo'},
    {name: 'Abrigo do Bem', address: 'Rua da Esperança, 789, Bairro', phone: '(11) 7777-8888', capacity:  35, city: 'Canoas'},
    {name: 'Casa dos Anjos' , address: 'Av. da Paz, 159, Centro', phone: '(11) 3333-2222', capacity: 15 , city: 'Porto Alegre'}
]

// função que preenche espaços vazios
// uma forma do código sempre ser igual
// SE cidade incluir o valor de busca imprime 
function searchByUserLocation(placesArray, userLocation) {
    
    for (let i = 0; i < placesArray.length; i++) {
        if (placesArray[i].city.includes(userLocation)) {
            console.log('codígo:', i)
            console.log(placesArray[i])
        }
    }
}

// let option = ''

// while(option !== '4') {
//     option = readlineSync.question('Escolha uma opcao: ')
//     switch(option) {
//         case '1':
//             const name = readlineSync.question('Nome do abrigo a ser cadastrado: ')
//             const address = readlineSync.question('Endereço (Rua, número, bairro/centro): ')
//             const phone = readlineSync.question('Telefone: ')
//             const capacity = Number(readlineSync.question('Capacidade: '))
//             const city = readlineSync.question('Cidade: ')   
//             break
//         case '2':          
//             break
//         case '3':
//             const userLocation = readlineSync.question('Em qual cidade voce esta? ')
//             break
//         case '4':
//             console.log('encerrando programa')
//             break
//         default:
//             console.log('digite um valor válido')
//             break
//     }
// }

searchByUserLocation(database, 'Canoas')