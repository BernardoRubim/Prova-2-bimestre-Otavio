document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capturar dados do formulário
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const media = (nota1 + nota2) / 2;
    const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

    // Criar nova linha na tabela
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;

    // Adicionar nova linha à tabela
    document.getElementById('corpo-tabela').appendChild(novaLinha);

    // Limpar campos do formulário
    document.getElementById('formulario').reset();
});

document.getElementById('limparTabela').addEventListener('click', function() {
    // Limpar a tabela
    document.getElementById('corpo-tabela').innerHTML = '';
});

