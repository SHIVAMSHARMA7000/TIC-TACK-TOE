let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0 = true;
let new_btn = document.querySelector("#new_game");
let msg_conatin = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let a = 1;
let iswin = false;

 const win_pattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
 ] ;
 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       if(turn0==true){
        turn0 = false;
        box.innerHTML = "O";
       }
       else{
        turn0 = true;
        box.innerHTML = "X";
       }
       box.disabled = true;
       checkwinner();
       a++;
       if(a==10 && !iswin){
         nowinner();
       }

    })

 })
 const checkwinner = ()=>{
   for( let pattern of win_pattern){
      let pos1 = boxes[pattern[0]].innerHTML;
      let pos2 = boxes[pattern[1]].innerHTML;
      let pos3 = boxes[pattern[2]].innerHTML;
      if(pos1 != "" && pos2 != "" && pos3 != ""){
         if(pos1 == pos2 && pos2 == pos3){
           showwinner(pos1);
           iswin  = true;
         }
      }
     

      }}

      const showwinner = (winner)=>{
         msg.innerText = ` CONGRATULATIONS! , Winner is ${winner}`;
         msg_conatin.classList.remove("hide");
         disablea();

         
      }
 
      const disablea = ()=>{
         for(let box of boxes){
            box.disabled = true;
         }
      }
       const enablea = ()=>{
         for(let box of boxes){
            box.disabled = false;
            box.innerText  = "";

         }
      }
      const resetbtn = ()=>{
         turn0 = true;
         enablea();  
         msg_conatin.classList.add("hide");
         a = 1;
         iswin = false;
      } 
      new_btn.addEventListener("click",resetbtn);
      reset.addEventListener("click",resetbtn);
      const nowinner = ()=>{
         msg.innerText = ` DRAW ! TRY AGAIN`;
         msg_conatin.classList.remove("hide");
         disablea();}