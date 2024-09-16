let firstNumber = 0;
let secondNumber = 0;
let resultText = '';
let maxtallInput = 10;
let antallInput = 10;

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
        <h3>Finn like tall</h3>
        Kjør loop
        <input type="number" oninput="antallInput=this.value" value="${antallInput}">ganger:
        <br>
        Max antall tall:
        <input type="number" oninput="maxtallInput=this.value" value="${maxtallInput}">
        <button onclick="startLoop()">Kjør Loop</button>
        <div>${resultText}</div>
    </div>
    `;
}

function startLoop(){

    let index = 0;
    resultText = '';
    while(index <= antallInput) {
        firstNumber = Math.floor(Math.random() * maxtallInput);
        secondNumber = Math.floor(Math.random() * maxtallInput);
        if (firstNumber == secondNumber) {
            resultText += `<li>Equal numbers found ${firstNumber} and ${secondNumber} på index ${index}</li>`;
        }
        console.log(firstNumber)
        console.log(secondNumber)
        index++
    }
    updateView();
}