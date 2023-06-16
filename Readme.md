Formato /registerUser

{
    "cpf": 10000000000,
    "type": "Conjunta",
    "name1": "Pedro",
    "email1": "pedro@gmail.com",
    "password1": "12345",
    "name2": "Maria",
    "email2": "maria@gmail.com",
    "password2": "12345"
}

Formato /signIn

{
    "cpf": 10000000000,
    "email": "maria@gmail.com",
    "password": "12345"
}

Formato /trasactionIn

{
    "cpf": 10000000000,
    "cpfRec": 20000000000,
    "value": 10
}

Formato /deposit

{
    "cpf": 10000000000,
    "value": 10
}

Formato /trasactionEx

{
    "banks":[
        ["bankA", 10000000000, "pedro@gmail.com", 12345, 10], 
        ["bankB", 10000000000, "pedro@gmail.com", 12345, 20]
    ]
    "destiny": "bankC"
    "cpf": 10000000000
}



<br>


<div id="pt">

<h1 align="center"> Sumário 📖 </h1>
<div id="sumario" style="display: inline_block" align="center">
	<a href="#intro"> Introdução  </a> |
	<a href="#conceitos"> Conceitos & Metodologia </a> |
	<a href="#docker"> Docker </a> |
	<a href="#conclusao"> Conclusão </a>
</div>
<br>

<div id="intro">

# Introdução 🎉

Os avanços na tecnologia e a crescente popularidade dos dispositivos móveis mudaram drasticamente a maneira como os clientes interagem com os serviços bancários. No Brasil, o lançamento do Pix revolucionou o negócio financeiro, proporcionando uma solução flexível, segura e inclusiva para pagamentos, depósitos e transferências de valores. Desde sua implantação, o Pix trouxe benefícios significativos para a vida dos brasileiros, sendo uma alternativa eficaz aos meios de pagamento tradicionais.

Diante dessa situação, o governo de um país sem banco central tem interesse em desenvolver um sistema semelhante ao Pix no Brasil. O objetivo é criar uma solução que permita a criação de contas bancárias para que os clientes possam realizar transações financeiras de forma distribuída, possibilitando pagamentos, depósitos e transferências entre diferentes contas bancárias sem a necessidade de uma entidade central.

Em resposta a esta necessidade, foi desenvolvido um protótipo de solução para este desafio. Neste projeto, exploraremos métricas e requisitos fundamentais para o desenvolvimento de sistemas distribuídos, com foco em questões como comunicação segura entre servidores bancários, transações atômicas garantidas e proteção contra movimentação de valores inexistentes ou gastos duplos.

Este relatório apresentará as soluções propostas e as tecnologias utilizadas para implementar os sistemas distribuídos exigidos pelos países relevantes. Além disso, analisaremos os desafios enfrentados e as estratégias adotadas para garantir a segurança e a confiabilidade das transações financeiras. Por fim, avaliaremos o potencial dessa solução distribuída para atender as necessidades e objetivos do país, permitindo o desenvolvimento de um sistema semelhante ao Pix no Brasil mesmo sem um banco central.

</div>

<div id="conceitos">

# Conceitos & Metodologia 📚

	
A metodologia adotada para o desenvolvimento do sistema de pagamentos distribuídos, baseado nos códigos fornecidos, segue uma abordagem orientada a microsserviços, onde cada componente desempenha uma função específica. A aplicação é dividida em duas partes principais: o componente Bank e o componente PaxosWithVectorClocks.

O componente Bank representa a API de um banco e é responsável por oferecer os serviços financeiros, como transferências, pagamentos e depósitos. Cada instância do Bank é tratada como um banco independente no sistema distribuído. Essa abordagem permite a escalabilidade horizontal do sistema, onde novas instâncias do Bank podem ser adicionadas conforme a demanda aumenta.

Por outro lado, o componente PaxosWithVectorClocks implementa o algoritmo de Paxos, combinado com relógios vetoriais, para garantir o consenso entre os bancos no sistema distribuído. O algoritmo de Paxos permite que os bancos cheguem a um acordo sobre os valores propostos em cada transação, mesmo em situações de falhas ou atrasos na comunicação. Os relógios vetoriais são utilizados para manter a consistência e a ordem das transações, registrando o conhecimento local do tempo em relação aos outros bancos.

A interação entre os componentes ocorre por meio de troca de mensagens. O Bank se comunica com outros bancos por meio de requisições e respostas HTTP, permitindo a realização de transações e a manutenção da consistência dos saldos das contas. O componente PaxosWithVectorClocks é responsável por enviar mensagens de preparação (prepare) e aceitação (accept) entre os bancos, a fim de chegar a um consenso sobre os valores propostos. Além disso, o aprendizado (learn) é utilizado para disseminar o valor aceito para os demais bancos.

A arquitetura do sistema permite que cada banco (instância do Bank) seja tratado como um componente independente, possibilitando o desenvolvimento e teste individual de cada banco. Essa abordagem facilita a manutenção e aprimoramento do sistema como um todo, além de proporcionar uma escalabilidade eficiente em termos de adição de novos bancos.

No contexto do sistema distribuído de pagamentos, o frontend foi implementado para fornecer uma interface amigável aos usuários, permitindo a visualização de informações relevantes, como saldos de contas, e outras funcionalidades relacionadas aos serviços financeiros.

<lu>
    <li><a href="#bank">Bank</a></li>
    <li><a href="#paxos">Paxos</a></li>
	<li><a href="#front">Frontend</a></li>
</lu>
</div>

<br>

<div id="car">  
  
# Car 🚗

Este é um arquivo de uma classe em Python que representa o carro. Esta classe serve para simular qualquer periférico que o carro tenha para que o sistema funcione como: Um voltímetro de bateria, um velocímetro e um geolocalizador. 

## Funcionalidades 🚀

Essa classe tem as seguintes funcionalidades:

- Simular valores vindo de um velocímetro e de um geolocalizador
	
- Simular o consumo da bateria do carro podendo definir a seu grau de consumo
	
## Bibliotecas utilizadas 📚
	
- `geopy`: Utilização e operações com pontos em latitude e longitude

## Como executar 🛠️

1. Tenha o Python instalado com a biblioteca geopy, que pode ser instalada com o pip pelo comando:
```console
pip install geopy
```
2. Execute o arquivo Car.py através do terminal com o comando:
```console
python Station.py
```
A execução desse arquivo tem apenas o propósito de testes isolados na classe ja que sua utilização é feita pelo arquivo CarSystem.py.
	
## Como funciona 📝
	
Essa classe representa o sistema do carro que é utilizado pelo nosso sistema, sintetizando eles em atributos e métodos. A classe contém como atributo:
- battery: Que representa a porcentagem de bateria do carro, sempre iniciando em 100%;
- batteryConsumption: Um valor entre 0 a 3 que representa o quanto de bateria o carro está gastando;
- latitude e longitude: Representam as coordenadas do carro atualmente.

O car.py também é composto por vários métodos. Além dos padrões métodos "Set's" e "Get's" temos métodos para controlar as simulação mais simples que a classe pretende ter, como:
- lowerBatteryConsumption(): Método que reduz o consumo de energia até no mínimo de 0;
- upBatteryConsumption(): Método que aumenta o consumo de energia até o máximo de 3;
- consumeBattery(): Reduz a bateria em 20% vezes o valor do consumo de energia;
- resetBattery(): Restaura o valor inicial da bateria;
- isLowBattery(): Avalia se a bateria igual ou inferior a 20%, caso verdadeiro informa que a bateria está baixa.

A classe ainda tem um último método que é o updateLocation que é mais complicado que os outros. Esse método tem como objetivo atualizar a localização do carro baseado no destino que ele pretende chegar, a sua velocidade atual e o tempo que ele vai andar. O cálculo da nova coordenada é feito calculando o inicialmente o tempo que o carro deve demorar para completar o seu destino, depois analisa quantos porcento desse destino ele irá andar com o tempo dado. Se a o tempo dado for menor que o tempo até o destino e calcular as coordenadas por uma regra de três, sado contrário a coordenada vai ser o destino.
	
</div>

<div id="carsystem">

<div id="carsystem">

# CarSystem 📱

Esse arquivo Python que instancia um objeto da classe Car e cria um controlador para o mesmo fazendo a integração do veículo com o nosso sistema avaliando a bateria do carro, atualizando a sua posição e quando necessário requisitando ao servidor o melhor posto para recarga via API REST.
	
## Funcionalidades 🚀

Esse controlador tem as seguintes funcionalidades:
	
- Controlar o consumo de bateria do seu Car;
- Avaliar o nível da bateria;
- Requisitar o melhor posto para recarga de bateria quando a mesma estiver baixa;
- Simular o movimento do carro.
	
## Bibliotecas utilizadas 📚

- `geopy.distance`: biblioteca para calcular a distância geográfica entre dois pontos;
- `requests`: biblioteca fazer requisições HTTP para uma API.
	
## Como executar 🛠️
	
1. É necessário ter o Python e a biblioteca requests e geopy.distance instalados na máquina, podendo ambos serem instaladas com o pip da seguinte forma:
	
```console
pip install requests
pip install geopy
```

2. Execute o arquivo CarSystem.py através do terminal com o comando:
	
```console
python CarSystem.py
```	
	
3. O arquivo vai criar um objeto Car informando seus dados iniciais e suas alterações, além de poder aumentar ou diminuir o consumo da bateria manualmente direto pelo terminal.
	
## Como funciona 📝
	
O Arquivo CarSystem é um módulo do sistema que instancia e controla um carro na rede. Ele é responsável por acompanhar a situação atual do carro para, quando necessário, solicitar ao servidor mais próximo o melhor posto para recarga. Para monitorar o carro dessa forma ela utiliza-se de alguns métodos para esse controle, os quais são executados em threads diferentes para que o monitoramento não seja dependente de outras funcionalidades.
	
Ao ser executado o CarSystem demonstra os dados iniciais do carro e depois informa o caminhar da bateria. Inicialmente ele mostra no terminal a velocidade do carro, seu consumo inicial de bateria e sua posição inicial, a medida que passa o tempo ele vai informando a bateria atual do carro a cada 10 segundos.
	
O monitoramento da bateria ocorre através da thread avaliableBatteryThread que executa o método avaliableBattery. Ao ser executado o  CarSystem começa a perguntar para o seu Car se a bateria está baixa e, caso esteja, solicita ao servidor qual posto mais próximo para a recarga. Com o recebimento correto do posto, é informado pelo terminal qual o posto encontrado, sua localização e o tamanho atual de sua fila e pausa a sua verificação da bateria até ela sair do nível baixo.

Como o sistema é um protótipo o CarSystem faz outras atividades para a simulação ocorrer da melhor forma. O módulo controla algumas modificações dos estados do carro em threads diferentes para não influenciar no próprio monitoramento. As modificações que ele proporciona e no deslocamento do carro, o consumo de bateria e o quanto de bateria o carro vai consumir.

Para o deslocamento do carro, o CarSystem cria uma thread para executar o método carInMoviment. O método é um loop que aleatoriza um destino para o Car dentro de uma região predeterminada e pede para ele se movimentar para esse destino por 6 min usando o método updateLocation e, assim que o carro chegue nesse ponto, ele cria um novo destino.
	
O controle da bateria e seu consumo ocorre em duas threads. Para criar o gasto de bateria é criada a thread consumeBetteryThread que usando o método consumeBattery do seu Car para consumir a bateria a cada 5 segundos. Já o controle do consumo é feito pela thread batteryConsumptionThead que informa que para aumentar ou diminuir o consumo de bateria o usuário deve digitar + ou - respectivamente para assim modificar o consumo de bateria.

</div>
	


<div id="front">

# Frontend 👨‍💻

A Interface é o componente principal do frontend, que apresenta um mapa com marcadores de pontos e um marcador móvel que representa o veículo. A funcionalidade do frontend aqui apresentada não foi solicitada, mas foi adicionada para uma melhor visualização do sistema de localização de scooters. Como essa funcionalidade foi adicionada ao projeto após a definição dos requisitos, ela não foi implementada da forma mais otimizada e pode conter algumas limitações.

O frontend do sistema de localização de scooters é uma aplicação web desenvolvida em React com TypeScript. Ele é responsável por mostrar no mapa a localização atual das scooters e o estado da bateria de cada uma delas.

O mapa utilizado é fornecido pelo OpenStreetMap e é renderizado utilizando a biblioteca Leaflet. O frontend consome os dados do servidor por meio de requisições HTTP utilizando a biblioteca Axios.

O código do frontend foi desenvolvido com o objetivo de fornecer uma interface amigável e intuitiva para o usuário final. No entanto, devido às limitações de tempo, ele não foi implementado da forma mais otimizada e pode conter algumas limitações.

## Funcionalidades 🚀

- Renderização de um mapa com a biblioteca Leaflet
- Atualização da localização do marcador móvel com base em dados recebidos do servidor
- Atualização dos marcadores de pontos com base em dados recebidos do servidor
- Verificação do nível de bateria e troca da estação de recarga, quando necessário.

## Bibliotecas utilizadas 📚

- React
- Leaflet
- Axios

## Como executar 🛠️

Para executar o frontend, é necessário ter o Node.js instalado na máquina.

1. Acesse a pasta do frontend no terminal.
2. Execute o comando npm install para instalar as dependências.
3. Execute o comando npm run dev para iniciar o servidor local.
4. Acesse a URL http://localhost:5173/ no navegador para visualizar o frontend.

## Como funciona 📝

O componente Interface utiliza a biblioteca Leaflet para renderizar um mapa e adicionar marcadores de pontos e um marcador móvel que representa o veículo. O estado data é inicializado como um array vazio que é atualizado através de uma requisição HTTP utilizando a biblioteca Axios. Os marcadores de pontos são adicionados ao mapa através do useEffect, que é disparado sempre que o estado data é atualizado.

A localização do marcador móvel é definida pelo estado coords, que é atualizado a cada 3 segundos através de um intervalo definido pelo setInterval. O nível de bateria é definido pelo estado batery e atualizado pela função baterylow, que é executada no intervalo definido pelo setInterval. Quando o nível de bateria atinge um valor abaixo de 50%, a função getStation é chamada para encontrar a estação de recarga mais próxima e atualizar a posição do marcador móvel. Isso é feito através de uma requisição HTTP utilizando a biblioteca Axios.

O componente utiliza a biblioteca useRef para armazenar uma referência ao marcador móvel, e o useEffect é utilizado para atualizar a posição do marcador móvel sempre que o estado coords é atualizado.

O componente Interface é exportado como um módulo para ser utilizado em outros componentes do frontend.

<div id="mapa1" style="display: inline_block" align="center">
		<img src="assets/mapa1.png"/>
		Mapa com um posto (verde) o carro utilizando a interface (vermelho) e as 3 nevoas (azul).
</div>
 
<div id="mapa1" style="display: inline_block" align="center">
		<img src="assets/mapa2.png"/>
		Mapa com o carro indo abastecer no posto.
</div>

<div id="mapa1" style="display: inline_block" align="center">
		<img src="assets/mapa3.png"/>
		Mapa com vários postos.
</div>

</div>

<div id="docker">

# Docker 🐳

Para gerar as imagens das aplicações em Python (Car, Fog e Gas Station), existem arquivos Dockerfile prontos para serem utilizados. Esses arquivos contêm as instruções necessárias para gerar as imagens da aplicação, incluindo as dependências, configurações e arquivos necessários para que a aplicação seja executada.

Resumidamente você irá precisar executar dois comandos: `docker build` e `docker run`.

Por exemplo, suponha que você tem um arquivo Dockerfile na raiz do projeto do servidor (o que é o caso) em Python com o nome Dockerfile.server e quer gerar a imagem com o nome meu-servidor. Para criar a imagem, execute o seguinte comando no terminal, dentro da pasta raiz do projeto:

```console
docker build -t meu-servidor -f Dockerfile.server .
```

Nesse comando, o parâmetro -t é utilizado para definir o nome da imagem que será gerada e o parâmetro -f é utilizado para especificar o arquivo Dockerfile a ser utilizado. O ponto no final indica que o contexto para a construção da imagem é a pasta atual.

Após a criação da imagem, ela pode ser executada com o comando docker run. É possível definir as portas que a aplicação utilizará e outras configurações através de parâmetros nesse comando. Por exemplo:

```console
docker run -p 1883:1883 meu-servidor
```

Nesse comando, o parâmetro -p é utilizado para definir a porta da máquina host que será redirecionada para a porta da aplicação dentro do container. O primeiro valor é a porta da máquina host e o segundo valor é a porta da aplicação dentro do container.

Caso queira compartilhar a imagem gerada em um repositório Docker, basta fazer o push dessa imagem com o comando docker push passando o nome da imagem e a tag correspondente. Por exemplo:

```console
docker push meu-repositorio/meu-servidor:1.0
```
Nesse comando, o nome meu-repositorio é o nome do seu repositório no Docker Hub e a tag 1.0 é a versão da imagem que está sendo enviada.

Com esses comandos, é possível gerar e executar as imagens das aplicações em Python com o Docker.

</div>

<div id ="conclusao">

# Conclusão 🏁


Neste projeto, desenvolvemos uma solução para monitoramento de baterias de veículos elétricos utilizando a tecnologia de Internet das Coisas (IoT). Para isso, utilizamos o protocolo MQTT para a comunicação entre os dispositivos e o broker, além do Docker para garantir a portabilidade e escalabilidade da solução.

Na parte do backend, desenvolvemos uma API RESTful em Python utilizando o framework Flask para receber as informações enviadas pelos dispositivos e armazená-las em um banco de dados MongoDB. Utilizamos também o serviço de cloud da Amazon Web Services (AWS) para hospedar a aplicação em uma instância EC2.

Na parte do frontend, implementamos uma interface gráfica em React com TypeScript para visualizar a localização dos veículos e o nível de bateria em tempo real. Adicionamos a biblioteca Leaflet para a criação do mapa e a biblioteca axios para realizar as requisições HTTP à API.

Apesar de ter atendido aos requisitos iniciais do projeto, a funcionalidade de frontend não foi solicitada e foi adicionada posteriormente para melhor visualização do sistema. Por isso, não foi implementada de forma otimizada e pode ser aprimorada em futuras versões.

Em resumo, este projeto apresenta uma solução funcional para monitoramento de baterias de veículos elétricos utilizando IoT e MQTT, com um backend em Python e um frontend em React. A utilização de tecnologias como Docker e AWS garante a escalabilidade e portabilidade da solução, permitindo que ela seja facilmente adaptada a diferentes cenários e necessidades.
</div>

</div>
