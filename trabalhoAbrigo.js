const readlineSync = require('readline-sync');


const database = [
    {name: 'Casa do Caminho', address: 'Rua do Amanhecer, 123, Centro', phone: '(11) 1234-5678', capacity: 20 , city: 'Canoas'},
    {name: 'Abrigo Esperança' , address: 'Rua da Solidariedade, 321, Bairro' , phone: '(11) 9876-5432', capacity: 30 , city: 'São Leopoldo'},
    {name: 'Casa dos Amigos' , address: 'Av. da Fraternidade, 456, Centro', phone: '(11) 5555-4444', capacity: 25, city:  'Novo Hamburgo'},
    {name: 'Abrigo do Bem', address: 'Rua da Esperança, 789, Bairro', phone: '(11) 7777-8888', capacity:  35, city: 'Canoas'},
    {name: 'Casa dos Anjos' , address: 'Av. da Paz, 159, Centro', phone: '(11) 3333-2222', capacity: 15 , city: 'Porto Alegre'}
]
// Imprimir cabeçalho
function printHeader() {
    console.log(`
--------------------
LISTAGEM DE ABRIGOS:
--------------------
CODE |         NAME          |               ENDEREÇO               |       PHONE      |  CAPACITY  | CITY             |
------------------------------------------------------------------------------------------------------------------------`)
}
// Imprimir abrigo
function printShelter(object, code){
console.log(`${(code + 1).toString().padEnd(5)}|   ${object.name.padEnd(20)}|   ${object.address.padEnd(35)}|   ${object.phone.padEnd(15)}|   ${object.capacity.toString().padEnd(9)}|   ${object.city.padEnd(15)}|`)
}
// Listar abrigos
function listShelter(array) {
    printHeader()
    for (let i = 0; i < array.length; i++) {
        printShelter(array[i], i)
    }
    console.log('------------------------------------------------------------------------------------------------------------------------')
}
//Pesquisar Abrigos
function searchShelter(array) {
    const city = readlineSync.question("In which city are you looking for a shelter? ");
    let counter = 0
    printHeader()
    for (let i = 0; i < array.length; i++) {
        if (array[i].city.toUpperCase().includes(city.toUpperCase())) {
            printShelter(array[i], i)
            counter++
        }
    }
    if(counter === 0) {
        console.log(`No results for search: "${city}"`)
    }
    console.log('------------------------------------------------------------------------------------------------------------------------')
}
//registrar Abrigo
function registerShelter(array) {
    const name = readlineSync.question("Enter the name of the shelter: ");
    const address = readlineSync.question("Which address: ");
    const phone = readlineSync.question("What's the phone: ");
    const capacity = Number(readlineSync.question("What's the capacity of the shelter: "));
    const city = readlineSync.question("What's the city: ");
    
    let shelter = {
        name : name,
        address : address,
        phone : phone,
        capacity : capacity,
        city : city
    }
    array.push(shelter)

    
    console.log('\nSuccessfully Registered Shelter\n')
}

function printMenu() {
   console.log(`===== TEMPORARY SHELTERS =====
   1. Register Shelter
   2. List Shelter
   3. Search for shelter
   4. Exit\n`) 
}


function chooseOption(key) {
    switch (key) {
        case '1':
            do {
                registerShelter(database)
            } while (readlineSync.question('continue registration? Y/N ' ).toUpperCase() === 'Y')
            break;
        case '2':
            listShelter(database)
            break
        case '3':
            searchShelter(database)    
            break
        case '4': 
            return false  
    }
    if (readlineSync.question('\ncontinue operations? Y/N ' ).toUpperCase() === 'Y') {
        return true
    } else {
        
        return false  
    }
}

function main() {
    let end = true
    while(end) {
        printMenu()
        let option = readlineSync.question('Choose an option: ')
        end = chooseOption(option)
        console.clear()
    }
    console.log('End system...')  
}

main()