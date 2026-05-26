function rosa(){

let frases=[

"🥀 Sou feita de caos e poesia.",

"🖤 A arte sempre encontra formas de falar.",

"🌙 Às vezes o silêncio diz mais.",

"✨ Bem-vindo(a) ao meu universo."

]

let sorteio=
Math.floor(
Math.random()*frases.length
)

document
.getElementById("mensagem")
.innerHTML=
frases[sorteio]


for(let i=0;i<20;i++){

let petala=
document.createElement("div")

petala.innerHTML="🌹"

petala.classList
.add("petala")

petala.style.left=
Math.random()*100+"vw"

petala.style.animationDuration=
Math.random()*3+2+"s"

document.body
.appendChild(petala)

setTimeout(()=>{

petala.remove()

},5000)

}

}
