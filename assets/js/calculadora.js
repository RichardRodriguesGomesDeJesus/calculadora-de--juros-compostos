"use strict"
const main = document.querySelector('.contents')
const Capitalinicial = document.querySelector('#capitalInicial')
const depositosMensais = document.querySelector('#valorMensal')
const jurosMensal = document.querySelector('#juros')
const meses = document.querySelector('#meses')

const start = document.querySelector(".calculator__form")
const reset = document.querySelector("#limpar")

start.addEventListener('submit', evento=>{
  evento.preventDefault()
  jurosCompostos(jurosMensal.value,meses.value,depositosMensais.value,Capitalinicial.value)
})
reset.addEventListener('click', evento=>{
  evento.preventDefault()
  jurosMensal.value = ''
  meses.value = ''
  depositosMensais.value = ''
  Capitalinicial.value = ''
})
function jurosCompostos(juros,meses,depositos,Capitalinicial) {
  let c1 = ((Math.pow((1 + (parseFloat(juros)/100)),1/12)-1) * 100) 
  let c2 = 1 + (c1/ 100)
  let c3 = Math.pow(c2,parseFloat(meses))
  let c4 = parseFloat(Capitalinicial) * c3
  let c5 =  (c3 -1) / (c1/100)
  let c6 = parseFloat(depositos) * c5
  const M = c4 + c6
  const total = M.toFixed(2)
  return main.innerHTML = `
  
  <section class="calculator">
    <h2 class="calculator__title">Simulador de Juros Compostos</h2>
    <form  class="calculator__form">
        <div class="container">
            <label for="capitalInicial" class="calculator__form___label">Valor inicial</label>
            <div class="div__input">
                <span class="input__icon" id="">R$</span><input type="number" id="capitalInicial"  class="calculator__form___input" placeholder="00,00" title="prencha o campo" required>
            </div>
            
        </div>
        <div class="container">
            <label for="valorMensal" class="calculator__form___label">Valor mensal</label>
            <div class="div__input">
                <span class="input__icon"class="input__icon" id="">R$</span><input type="number" id="valorMensal" class="calculator__form___input" placeholder="00,00" title="prencha o campo" required>
            </div>
            
        </div>
        <div class="container">
            <label for="juros" class="calculator__form___label">Taxa de juros anual</label>
            <div class="div__input">
                <span class="input__icon" id="">%</span><input type="number" id="juros" class="calculator__form___input" placeholder="00,00" title="prencha o campo" required>
            </div>
            
        </div>
        <div class="container">
            <label for="meses" class="calculator__form___label">Período em meses</label>
            <div class="div__input">
                <span class="input__icon" id="time"></span><input type="number" id="meses" class="calculator__form___input" placeholder="00,00" title="prencha o campo" required>
            </div>   
        </div>
        <input type="submit" value="Calcular" class="calculator__button" id="calcular">
        <button class="calculator__button" id="limpar" >Limpar</button>
    </form>
  </section>
  <section class="resultados">
    <h2 class="resultados__title">Resultado</h2>
    <div class="resultados__cards">
        <div class="resultados__cards___card">
            <p class="resultados__cards___card____nome">Valor total final</p>
            <p class="resultados__cards___card____valor" >R$ ${total}</p>
        </div>
        <div class="resultados__cards___card">
            <p class="resultados__cards___card____nome">Valor total investido</p>
            <p class="resultados__cards___card____valor" >R$ ${(parseInt(Capitalinicial) + (parseInt(depositos) * parseInt(meses))).toFixed(2)}</p>
        </div>
        <div class="resultados__cards___card">
            <p class="resultados__cards___card____nome">Total em juros</p>
            <p class="resultados__cards___card____valor" >R$ ${ (total - (parseInt(Capitalinicial) + (parseInt(depositos) * parseInt(meses)))).toFixed(2)}</p>
        </div>
    </div>
  </section>`
}