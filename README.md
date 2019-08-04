# Doglist

Este projeto é referente a um desafio para um processo seletivo.
Foi solicitada uma listagem simples de cachorros que passaram por uma Pet Shop, mas com alguns filtros básicos. 
A aplicação inicia com um conjunto inicial de 1.000 cachorros aleatórios.

Para o backend foi usado um aquivo JSON criado online com dados fictícios.

O frontend foi feito com ReactJS

#Inicialização do arquivo:
Foi utilizado o VSCode para criação do projeto, caso opte por ele, melhor. 

1- Primeiro abra o diretório escrito backend e coloque no terminal "yarn install" sem as aspas para instalar as dependências do node_modules.

2- Após, digite no terminal "yarn start". Dessa forma, o backend ficará disponível em: http://localhost:3001/users .

3- Abra um novo terminal, saia do diretório backend e entre em frontend.

4- Em seguida, rode novamente o comando "yarn install" para baixar todas as dependências, agora do frontend.

5- Assim que finalizar o download das dependências, rode o comando "yarn start" (dentro do diretorio frontend).
 A aplicação ficará disponível em: http://localhost:3000/ .
 
 #Funcionamento:
 
  Quando a aplicação inicia, todos os 1000 cães são listados. A lista mostra 22 cães por página.
  Para continuar tendo acesso à lista percorra a numeração das páginas, que estão ao final da lista.
  Aplique os filtros que considerar necessários e, assim que selecionados, a lista atualiza automaticamente.
  Caso deseje ver a lista completa novamente, atualize a página ou marque a opção em branco no filtros.
  Tanto a data de nascimento, quanto de última visita deve ser informada no formato : dd/mm/aaaa.
  
  #Sugestões de melhoria:
  Implementar o CRUD completo, melhorar numeração da página e colocar escrita de data no formato calendário. 
