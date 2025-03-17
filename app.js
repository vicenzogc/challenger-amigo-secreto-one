let nomes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nome = nomeInput.value.trim();

    if (nome !== '') {
        nomes.push(nome);
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
        nomeInput.value = '';
    }
}

function sortearAmigo() {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa resultados anteriores

    if (nomes.length < 2) {
        resultadoLista.textContent = 'Adicione pelo menos dois nomes para sortear.';
        return;
    }

    const sorteio = {};
    const participantes = [...nomes];

    nomes.forEach(nome => {
        let amigoSecreto;
        do {
            const indiceAleatorio = Math.floor(Math.random() * participantes.length);
            amigoSecreto = participantes[indiceAleatorio];
        } while (amigoSecreto === nome);

        sorteio[nome] = amigoSecreto;
        participantes.splice(participantes.indexOf(amigoSecreto), 1);
    });

    for (const nome in sorteio) {
        const li = document.createElement('li');
        li.textContent = `${nome} tirou ${sorteio[nome]}.`;
        resultadoLista.appendChild(li);
    }
}