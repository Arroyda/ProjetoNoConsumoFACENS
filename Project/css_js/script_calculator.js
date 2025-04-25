function calcular() {
    const D12 = parseFloat(document.getElementById('custo-disponibilidade-input').value) || 0;
    const D13 = parseFloat(document.getElementById('tarifa-tributacao-input').value) || 0;
    const D14 = parseFloat(document.getElementById('tarifa-distribuidora-input').value) || 0;
    const D8 = parseFloat(document.getElementById('potencia-sistema-proposto').value) || 0;  // Adicionando o valor de A1

    let totalSemSistema = 0;
    let somaConsumo = 0;
    let somaSimulacao = 0;

    for (let i = 18; i <= 29; i++) {
        // Soma da coluna CONSUMO [kWh]
        const consumo = parseFloat(document.getElementById('I' + i).value) || 0;
        somaConsumo += consumo;

        // Soma da coluna SIMULAÇÃO 1KWp [kWh]
        const simulacaoInput = document.getElementById('J' + i);
        if (simulacaoInput) {
            const simulacao = parseFloat(simulacaoInput.value) || 0;
            somaSimulacao += simulacao;

            // Cálculo do custo SEM SISTEMA
            if (consumo <= D12) {
                totalSemSistema += D12 * D13;
            } else if (consumo <= 150) {
                totalSemSistema += consumo * D13;
            } else {
                totalSemSistema += (150 * D13) + ((consumo - 150) * D14);
            }

            // Multiplicação de J18 até J29 por A1
            const resultadoMultiplicacao = simulacao * D8;

            // Exibe o resultado da multiplicação na label correspondente
            document.getElementById('resultado-J' + i).textContent = resultadoMultiplicacao.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2});
        }
    }

    // Exibe resultado SEM SISTEMA
    document.getElementById('resultado').textContent = 'R$: ' + totalSemSistema.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2});

    // Exibe total da coluna CONSUMO
    document.getElementById('totalI').textContent = somaConsumo.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2});

    // Exibe total da coluna SIMULAÇÃO
    document.getElementById('totalJ').textContent = somaSimulacao.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2});
}
