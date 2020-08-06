let lista = document.getElementById('lista');

const pessoas = [
    {
        nome: 'Maria das dores',
        endereco: 'Rua das Amélias, 123',
        cidade:'das Maravilhas',
        estado:'sp',
        pais:'Brasil',
        telefone:'123456',
        nascimento:'01/02/15',
    },
    {
        nome: 'Ana clara',
        endereco: 'Rua das Margaridas, 321',
        cidade:'das Jujubas',
        estado:'Rj',
        pais:'Brasil',
        telefone:'456789',
        nascimento: '02/01/80',
    },
]

function carrega(){
    for(let key in pessoas){
        let item = document.createElement('li');
        lista.appendChild(item);

        let expand = document.createElement('details');
        item.appendChild(expand);

        let titulo = document.createElement('summary');
        titulo.innerText = `${pessoas[key].nome.match(/\S+ /)}`
        expand.appendChild(titulo);

        let detalhes = document.createElement('p');
        detalhes.innerText = `Nome: ${pessoas[key].nome} \n 
        Endereço: ${pessoas[key].endereco} \n 
        Cidade: ${pessoas[key].cidade} \n
        Estado: ${pessoas[key].estado} \n
        Pais: ${pessoas[key].pais} \n
        Telefone: ${pessoas[key].telefone} \n
        Nascimento: ${pessoas[key].nascimento}`
        expand.appendChild(detalhes);
    }
}



