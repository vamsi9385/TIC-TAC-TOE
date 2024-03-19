let turn="X"
let iswon=false

let clickaud=new Audio("ting.mp3")
let changeturn=()=>{
    return turn==="X"?"O":"X"
}

let checkwin=()=>{
    let boxtext=document.getElementsByClassName("text")
    let win=[
        [0,1,2,0,5,0],
        [0,3,6,-10,15,90],
        [0,4,8,0,15,45],
        [1,4,7,0,15,90],
        [2,4,6,0,15,-45],
        [2,5,8,10,15,90],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector(".infoturn").innerText=boxtext[e[0]].innerText + " WON THE GAME"
            iswon=true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="30vw"
            
            
        }
    })
}
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".text")
    element.addEventListener("click",()=>{

        if(boxtext.innerHTML===''){
            clickaud.play()
            boxtext.innerHTML=turn;
            checkwin()
            turn=changeturn();
            if(!iswon){
                document.querySelector(".infoturn").innerText="Turn for "+turn;
            }
        }
    })
})


reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".text")
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
        turn="X"
        iswon=false
        document.querySelector(".infoturn").innerText="Turn for "+turn;
        document.querySelector(".line").style.width="0vw"
        
    })
})