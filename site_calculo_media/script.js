function verificar_notas(){
    if(
        document.getElementById('txt_b1').value != "" &&
        document.getElementById('txt_b2').value != "" &&
        document.getElementById('txt_b3').value != "" &&
        document.getElementById('txt_b4').value != "" 
    )
    {
        calcular_media()
    }
    else{
        alert('ATENÇÃO: PREENCHA AS NOTAS!!!')
    }
}








function calcular_media(){
    let b1 = parseFloat(document.getElementById('txt_b1').value)
    let b2 = parseFloat(document.getElementById('txt_b2').value)
    let b3 = parseFloat(document.getElementById('txt_b3').value)
    let b4 = parseFloat(document.getElementById('txt_b4').value)

    let media = (b1 + b2 + b3 + b4) / 4

    document.getElementById('span_media').innerText = media.toFixed(2)
    
    if (media > 5){
        document.getElementById('span_media').style.color = 'blue'
        document.getElementById('p_condicao').style.color = 'blue'
        document.getElementById('p_condicao').innerText = 'APROVADO'
    }
    else{
        document.getElementById('span_media').style.color = 'red'
        document.getElementById('p_condicao').style.color = 'red'
        document.getElementById('p_condicao').innerText = 'REPROVADO'
    }
 }