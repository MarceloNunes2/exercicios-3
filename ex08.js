// [ ] Escreva um programa onde, você cria uma função geradora de desconto.

/*
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

Os descontos funcionam da seguinte forma:

Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 =&gt; 30% de desconto


Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 25% de desconto

Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 20%

Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 =&gt; 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 15% de desconto


Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 10%


Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 =&gt; 20% de desconto


Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 15% de desconto


Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 10%

Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 =&gt; 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 5% de desconto

Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 =&gt; SEM DESCONTO- A função deve imprimir na tela:


Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.


Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.

*/


function desconto (nome,valor,primeiracompra,pagametoavista){



    if(primeiracompra && pagametoavista){
        if (valor > 1000){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  30% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.30)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.30}.`)
        }
        else if (valor > 500){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  25% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.25)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.25}.`)
        }
        else{
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  20% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.20)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.20}.`)
        }

    }
    if(primeiracompra && !pagametoavista){
        if(valor > 1000){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  20% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.20)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.20}.`)
        }else if (valor > 500){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  15% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.15)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.15}.`)
        }else{
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  10% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.10)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.10}.`)
        }
    }
    if(!primeiracompra && pagametoavista){
        if(valor > 1000){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  20% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.20)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.20}.`)
        }else if (valor > 500){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  15% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.15)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.15}.`)
        }else{
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  10% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.10)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.10}.`)
        }
    }
    if(!primeiracompra && !pagametoavista){
        if (valor > 1000){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  10% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.10)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.10}.`)
        }else if (valor > 500){
            console.log(`Parabens ${nome} pela compra, como você gastou  R$ ${valor}, você tera um cupom de  5% de desconto, o valor da sua compra ficou em ${(valor - (valor * 0.05)).toFixed(2)}, Obrigado volte sempre !!`)
            console.log(`Valor do seu desconto ${ valor*0.05}.`)
        }
        else if (valor < 500){
                console.log(`Infelizmente você nao tem direito a desconto, Porem na sua proxima compra seu desconto séra de `,Math.trunc(Math.random()*(20 - 10 )+10),`%`)
        }
        else{
            console.log(`Dados inseridos não são validos. Favor tentar novamente.`)
        }
    }
}

desconto("lucas")