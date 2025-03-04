<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Estoque</title>
    <link rel="stylesheet" href="style.css">
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
            white-space: nowrap; /* Impede quebra de texto */
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <header>
        <h1>Cadastro de Estoque</h1>
    </header>

    <main>
        <form id="cadastroEstoque">
            <label for="item">Item:</label>
            <input type="text" id="item" name="item" required>

            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" name="descricao" required>

            <label for="categoria">Categoria:</label>
            <select id="categoria" name="categoria">
                <option value="materiaPrima">Matéria Prima</option>
                <option value="consumivel">Consumíveis</option>
                <option value="equipamento">Equipamentos</option>
                <option value="ferramentas">Ferramentas</option>
            </select>

            <label for="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" min="1" required>

            <label for="unidade">Unidade:</label>
            <select id="unidade" name="unidade">
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="l">l</option>
                <option value="ml">ml</option>
                <option value="un">un</option>
                <option value="pct">pct</option>
                <option value="rol">rol</option>
                <option value="kit">kit</option>
            </select>

            <label for="valor">Valor:</label>
            <input type="number" id="valor" name="valor" min="0" step="0.01" required>

            <button type="submit">Cadastrar</button>
        </form>

        <div id="respostaCadastro"></div>
    </main>

    <script>
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

            // Armazenar no localStorage
            let estoque = JSON.parse(localStorage.getItem('estoque')) || [];
            estoque.push(itemCadastro);
            localStorage.setItem('estoque', JSON.stringify(estoque));

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
    </script>

</body>
</html>

