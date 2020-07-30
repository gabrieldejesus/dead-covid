// Adicionar covid na tela aleatoriamente
function addCovid() {
	// criar um elemento novo e armazenar na variavel covid
    const covid = document.createElement("div");
    // adicionar o atributo class na div criada e adicionar o valor covid
    covid.setAttribute("class", "covid")

    // gerar numero aleatorio de 0 a 500 e usar o floor para transformar ele em um número inteiro
    const position1 = Math.floor(Math.random() * 800) // posição 1: x
    const position2 = Math.floor(Math.random() * 400) // posição 2: y

    // posicionar a div covid em um ponto aleatorio da tela 
    covid.setAttribute("style", "left:"+position1+"px;top:"+position2+"px;");

    // Ação de click para matar o covid
    // this: paramentro para saber que se trata do própio objeto
    covid.setAttribute("onclick", "dead(this)");

    // Colocar na tela o covid
    // appendChild: Pegar o conteudo que já está no site e adicionar um elemento novo
    document.body.appendChild(covid);
}

// Função para matar o covid
function dead(element) {
	// pegar o elemento covid e remover da tela
    document.body.removeChild(element);
}

// iniciar o jogo quando a página carregar
function start() {
	// setar um timer no javascript para que de 1 em 1 segundo ele execute a função addCovid()
    setInterval(addCovid, 1000);

    // sumir com o botão de começar
    document.querySelector('.start').style.display = 'none';

    // aparecer com as informação
    document.querySelector('.info').style.display = 'flex';
}