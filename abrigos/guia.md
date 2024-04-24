# Fazendo trabalho Abrigos

## Sumário
* [**Ciclo de uso do programa**](#ciclo-de-uso-do-programa)
* [**Preparação**](#preparação) 
* [**Funções Principais**](#funções-principais)

    1. [Cadastro de Abrigo](#1-cadastro-de-abrigo)
    2. [Listar Abrigos](#2-listar-abrigos)
    3. [Procurar Abrigo](#3-procurar-abrigo)
    
* [**Funções Complementares**](#funções-complementares)
* [**Implementação do programa e do Menu**](#sobre-a-implementação-do-programa-e-do-menu)

## Ciclo de uso do programa

Exemplo de funcionamento do programa:

    1. Programa inicia

    2. Usuário é apresentado ao menu:
        ===== ABRIGOS TEMPORÁRIOS =====
        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair
    
    3. Usuário escolhe uma opção

        Opção 'Cadastrar abrigo':

            O usuário insere as seguintes informações:
                Qual o nome do abrigo?
                Em qual cidade fica o abrigo?
                Qual o endereço do abrigo?
                Qual o telefone do abrigo?
                Qual a capacidade de pessoas do abrigo?

            A função cadastrarAbrigo() é chamada e as informações e o array com os abrigos são passadas como parâmetro

            é perguntado para o usuário se ele deseja cadastrar mais abrigos.

        Opção 'ListarAbrigos':

            É Impresso no terminal:
            --------------------
            LISTAGEM DE ABRIGOS:
            --------------------

            A função listarAbrigos() é chamada e o o array com os abrigos são passadas como parâmetro, assim exibindo todos os abrigos.

        Opção 'Procurar abrigo':

            O usuário insere as seguintes informações:
                Em qual cidade você está?

            É Impresso no terminal:
            --------------------
            LISTAGEM DE ABRIGOS:
            --------------------

            A função ProcurarAbrigo() é chamada e as informações(a cidade) e o array com os abrigos são passadas como parâmetro, assim exibindo todos os abrigos que estão na cidade pesquisada. 


            
        Opção 'Sair':

            Programa encerra

    4. Caso o usuário não tenha encerrado o programa é perguntado se o usuário deseja continuar usando o programa.

            


## Preparação

 A parte mais simples do programa, aqui é onde serão declaradas o `readline-sync` e a **variável** `const` com o `array` dos abrigos

## Funções Principais

### **1. Cadastro de Abrigo:** 

Essa opção permite cadastrar um novo abrigo no sistema. O programa deve solicitar o nome, endereço, telefone e capacidade de lotação do abrigo. Os dados devem ser armazenados em um objeto e este objeto deve ser incluído em um `array` de abrigos.

A função **cadastro de abrigos** funciona de forma simplificada recebendo os dados que serão cadastrados e então "salvando" eles dentro de um **objeto** que será armazenado dentro de um **array**.

**Partes da função:**

* O primeiro **parâmetro** pode ser o **array** onde vão ser guardados os **objetos** com informações dos abrigos. 
* Os outros **parâmetros** serão `nome`, `cidade`, `endereço`, `telefone`e `capacidade de lotação`. 
    ```js
    function cadastrarAbrigo(nome, cidade, etc) {

    }
* Dentro da função deve ser criado um **objeto**, o `valor` das `propriedades` serão os **parâmetros** passados anteriormente.  

    ```js  
    const objeto = {
        name: nome,
        city: cidade,
        //etc
    }

* Por ultimo o **objeto** deverá ser colocado no dentro do **array** que foi passado como **parâmetro**. 

    ```js
    array.push(objeto)
### **2. Listar Abrigos:** 

Essa opção lista todos os abrigos cadastrados no sistema, mostrando seus códigos, nomes, endereços, telefones e capacidade de lotação. O código é sempre a posição do objeto no `array`.

A função **listar os abrigos** funciona de forma simplificada recebendo o **array** com os **objetos**, fazendo um **laço/loop** `for`, e então **imprimindo** no terminal os dados dos abrigos.

**Partes da função:**

* A função irá receber um **parâmetro** que será o **array** com os dados dos abrigos.
    ```js
    function listarAbrigo(array) {

    }
* Crie um laço/loop `for` que passe por cada elemento do **array**.

    ```js
    for (let i = 0; i < array.length; i++) {

    }
* Dentro do laço `for` será chamada uma a `função complementar` que imprime no terminal os dados de um abrigo.



### **3. Procurar Abrigo:** 

Essa opção permite que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. O programa deve perguntar ao usuário a sua cidade e mostrar todos os abrigos cadastrados naquela cidade, com suas informações completas, além de informar a disponibilidade de vagas.

A função **procurar abrigos** funciona de forma simplificada recebendo o **array** com os **objetos** e a `cidade` onde queremos encontrar o abrigo, então é feito um **laço/loop** `for`, dentro do **laço** será verificado se o abrigo fica na `cidade` buscada.

**Partes da função:**

* A função irá receber como **parâmetros** o **array** com os dados dos abrigos e a `cidade`.
    ```js
    function listarAbrigo(array, cidade) {
        
    }
* Crie um laço/loop `for` que passe por cada elemento do **array**.
* Dentro do `for` crie um `if`, a condição para passar no `if` é o elemento do **array** ter a `cidade` que foi passada como **parâmetro**. 
* Dentro do `if` será chamada uma a `função complementar` que imprime no terminal os dados de um abrigo.


## **Funções Complementares:**

As funções complementares serão funções relacionadas a interface do **Menu** para evitar repetições em excesso no código.



### **Imprimir Abrigo**

Essa função imprime os dados de **UM** abrigo da seguinte forma:

       001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas

**Partes da função:**

* A função irá receber como parametro um **objeto**
* será escrito um `console.log` com os dados do **objeto**
### **Imprimir Linha dos cabeçalhos**

Essa função imprime:
    
```
    CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
    -------------------------------------------------------------------------------------------------------------------
```
### **Imprimir Menu**

Essa função imprime:

    ===== ABRIGOS TEMPORÁRIOS =====
    1. Cadastrar abrigo
    2. Listar abrigos
    3. Procurar abrigo
    4. Sair


### Sobre a implementação do programa e do Menu

* Será usado um **laço/loop** `while` para que o programa fique **rodando** até que o usuário escolha **Sair** do programa.
* O programa será todo construido dentro de uma função, isto não é algo obrigatório no entanto, fica mais organizado e facilita na hora de testar algumas funções.
* O usuário poderá escolher as opções devido ao uso do `readline-sync` e de uma estrutura de `switch case` ou `ìf else`.