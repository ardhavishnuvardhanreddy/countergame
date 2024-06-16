let count = document.getElementById("counterValue");

function onIncrement(){
    let newCount = count.textContent;
    let update = parseInt(newCount)+1;
    if(update>0){
        count.style.color="green";
    }
    else if(update<0){
        count.style.color="red";
    }
    else {
        count.style.color="black";
    }
    count.textContent = update;
}

function  onDecrement(){
    let newCount = count.textContent;
    let update = parseInt(newCount)-1;
    if(update>0){
        count.style.color="green";
    }
    else if(update<0){
        count.style.color="red";
    }
    else {
        count.style.color="black";
    }
    count.textContent = update;
}
function onReset(){
    let val = 0;
    count.textContent=val;
    count.style.color="black";
}