# Trabalho Abrigos

Olá! Você foi contratado para desenvolver um programa em Javascript que ajude a população em situação de rua a encontrar abrigos temporários em dias frios. O programa deve utilizar a função `readline-sync` para receber dados de entrada dos usuários.

O programa deve permitir que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. Para isso, deve ser criado um banco de dados com informações dos abrigos disponíveis no estado, como nome, endereço, cidade, telefone e capacidade de lotação.

O programa deve ter um menu com as seguintes opções:

```markup
===== ABRIGOS TEMPORÁRIOS =====
1. Cadastrar abrigo
2. Listar abrigos
3. Procurar abrigo
4. Sair
Escolha uma opção:
```

Ao selecionar uma opção deve ser chamada uma função que execute a respectiva ação, conforme detalhamento abaixo:

**1. Cadastro de Abrigo:** essa opção permite cadastrar um novo abrigo no sistema. O programa deve solicitar o nome, endereço, telefone e capacidade de lotação do abrigo. Os dados devem ser armazenados em um objeto e este objeto deve ser incluído em um `array` de abrigos.

**2. Listar Abrigos:** essa opção lista todos os abrigos cadastrados no sistema, mostrando seus códigos, nomes, endereços, telefones e capacidade de lotação. O código é sempre a posição do objeto no `array`.

Exemplo:

```markup
--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------
  001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
  002  | Abrigo Esperança     | Rua da Solidariedade, 321, Bairro  |  (11) 9876-5432  |     30  | São Leopoldo
  003  | Casa dos Amigos      | Av. da Fraternidade, 456, Centro   |  (11) 5555-4444  |     25  | Novo Hamburgo
  004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
  005  | Casa dos Anjos       | Av. da Paz, 159, Centro            |  (11) 3333-2222  |     15  | Porto Alegre
---------------------------------------------------------------------------------------------------------
```

**3. Procurar Abrigo:** essa opção permite que o usuário encontre um abrigo temporário na sua cidade, informando a sua localização. O programa deve perguntar ao usuário a sua cidade e mostrar todos os abrigos cadastrados naquela cidade, com suas informações completas, além de informar a disponibilidade de vagas.

Exemplo:

```markup
Qual cidade você está?
Canoas

--------------------
LISTAGEM DE ABRIGOS:
--------------------
CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------
  001  | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
  004  | Abrigo do Bem        | Rua da Esperança, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
---------------------------------------------------------------------------------------------------------
```

1. **Sair:** o programa deve encerrar seu funcionamento.