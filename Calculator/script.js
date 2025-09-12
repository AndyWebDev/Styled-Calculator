const display=document.getElementById('result');
const buttons=document.querySelectorAll('#calculator button');
buttons.forEach(button=>{button.addEventListener('click',()=>{
    const value=button.value;
    if (value==='C'){
        display.value="";
    } else if(value==='='){
        try{
            display.value=eval(display.value);
        } catch {
            display.value="Error";
        }
    } else {display.value+=value;}
});
});