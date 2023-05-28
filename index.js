
function onlyNumber(event){
    
    var ascii =event.which;
    if(ascii==8 || (ascii>=48 && ascii<= 57)){
        // str+=event.key;
        return true;
    }
    return false;
}
function doAction(){
    document.getElementById("container").innerHTML='';
    var input = document.getElementById('numberinput');
    var times = (input.value);


for(var i=1; i<=times;i++){
    var result =isTypeNUm(i);
    if(result===1){
        const div =document.createElement("div");
        div.classList.add("even");
        div.innerText=i;
        document.getElementById("container").appendChild(div);
    }
    else if(result===2){
        const div =document.createElement("div");
        div.classList.add("odd");
        div.innerText=i;
        document.getElementById("container").appendChild(div);
    }
    else{
        const div =document.createElement("div");
        div.classList.add("prime");
        div.innerText=i;
        document.getElementById("container").appendChild(div);
    }
    



}
function isTypeNUm(num){
    var m=0;
    if(num%2==0){
        m=1;
    }
    if(num%2==1){
        m=2;
    }
    
        var n=0;
        for(var i=2;i<num;i++)
        {
            if (num%i===0){
                n=1;
                break;
            }
        }
        if(n===0 && num!=1){
            m=3;
        }
    
    console.log(m);
    return m;


}
}