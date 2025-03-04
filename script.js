Código JavaScript (script.js):

document.getElementById('cadastroEstoque').addEventListener('submit', function(event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const quantidade = document.getElementById('quantidade').value;
    const unidade = document.getElementById('unidade').value;
    let valor = document.getElementById('valor').value;

    // Formatar o valor como moeda
    valor = parseFloat(valor.replace(',', '.')).toFixed(2); // Garantir que o valor tenha 2 casas decimais
    valor = valor.replace('.', ','); // Substituir o ponto por vírgula para o formato brasileiro
    valor = `R$ ${valor}`;

    const dataCadastro = new Date();
    const lote = dataCadastro.toLocaleDateString('pt-BR').replace(/\//g, '');

    const itemCadastro = {
        item,
        descricao,
        categoria,
        quantidade,
        unidade,
        valor,
        lote,
    };

    const respostaCadastro = document.getElementById('respostaCadastro');
    respostaCadastro.innerHTML = `
        <p>Item Cadastrado com Sucesso:</p>
        <ul>
            <li>Item: ${item}</li>
            <li>Descrição: ${descricao}</li>
            <li>Categoria: ${categoria}</li>
            <li>Quantidade: ${quantidade} ${unidade}</li>
            <li>Valor: ${valor}</li>
            <li>Lote: ${lote}</li>
        </ul>
    `;
});

