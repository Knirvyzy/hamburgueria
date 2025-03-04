Código JavaScript (script.js):

document.getElementById('cadastroEstoque').addEventListener('submit', function(event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const quantidade = document.getElementById('quantidade').value;
    const unidade = document.getElementById('unidade').value;
    const valor = document.getElementById('valor').value;

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
            <li>Valor: R$ ${valor}</li>
            <li>Lote: ${lote}</li>
        </ul>
    `;
});



