let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame=()=>{
turn0=true;
enableBoxes();
msgContainer.classList.add("hide"); 
};
 
boxes.forEach((box)=>{
 box.addEventListener("click",()=>{   

if(turnO){
    box.innerHTML="O";
    turnO=false;
}
else{
    box.innerHTML="X";
    turnO=true;
}
box.disabled=true;
checkwinner();
 });


});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    
    msg.innerText=`winner -${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{
    for(let pattern of winpatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1 !=""&&pos2 !=""&&pos3 !=""){
           if(pos1===pos2&&pos2===pos3){
               showWinner(pos1);
           }
       }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);