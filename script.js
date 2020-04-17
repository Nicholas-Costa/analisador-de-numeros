// Variáveis principais...
var numero = document.getElementById('txtnumero')
var caixa_texto = document.getElementById('areatxt')
var lista = []
var botao_add = document.getElementById('btn1')
var botao_fim = document.getElementById('btn2')
var resultado = document.getElementById('div3')
// Click's dos botões...
botao_add.addEventListener('click', adicionar)
botao_fim.addEventListener('click', finalizar)

// Função para adicionar um novo valor à lista...
function adicionar() {
    resultado.innerText = ''
    if(numero.value === "") {
        alert('Por favor, informe o número que deseja adicionar à lista!')       
    } else {
        num = Number(numero.value)
        // Verifica se é o primeiro número da lista
        if(lista.length===0) {
            caixa_texto.innerText = ''
        }
        // Verifica se o número digitado está entre 1 e 100...
        if(num >= 1 && num <= 100) {
            // Verifica se o número já está na lista
            if(lista.indexOf(num)=== -1) {
                lista.push(num)
                caixa_texto.innerHTML += `O valor ${num} foi adicionado\n`
                document.getElementById('txtnumero').value = ''
            } else {
                alert('Este número já está na lista!')
                document.getElementById('txtnumero').value = ''
            }
        } else {
            alert('O número digitado está fora do intervalo permitido')
            document.getElementById('txtnumero').value = ''
        }
    }
    numero.focus()
}
// Função para o cálculo da soma de todos os valores...
function somarLista() {
    var somaLista = 0
    var i=0
    for(i; i<lista.length;i++) {
        somaLista += lista[i]
    }
    return somaLista
}
// Função para o cálculo da média dos valores...
function mediaLista() {
    var mediaLista = 0
    var i = 0
    mediaLista = somarLista()/lista.length
    return mediaLista
}
// Função para a finalização de todos os cálculos
function finalizar() {
    var countLista = lista.length
    var listaOrdenada = lista.sort()
    var maiorValor = listaOrdenada[countLista-1]
    var menorValor = listaOrdenada[0]
    var somaTotal = somarLista()
    var mediaTotal = mediaLista()
    // Verifica se lista está vazia
    if(countLista==0) {
        alert('Não é possível finalizar com a lista vazia!')
    } else {
        resultado.innerText = ''
        resultado.innerHTML += `Ao todo, temos ${countLista} números cadastrados
        <br>
        O maior valor informado foi ${maiorValor}
        <br>
        O menor valor informado foi ${menorValor}
        <br>
        Somando todos os valores, temos ${somaTotal}
        <br>
        A média dos valores digitados é ${mediaTotal}`
    }
    numero.focus()
}

