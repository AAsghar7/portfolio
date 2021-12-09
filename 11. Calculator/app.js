var input = document.getElementById("input");
function num(val){
    var user = val[val.length - 1];
    var user2 = input.value[input.value.length - 1];
    if(user == ["/","+","-","*","%"] && user2 == ["/","+","-","*","%"]){
        input.value = input.value;
    }
    else{
        input.value += val;
    }
    console.log(user,user2)

}
function erase(){
    input.value = "";
}
function del(){
    var result = input.value.slice(0,input.value.length - 1);
    input.value = result;
}
function result(){
    var final = eval(input.value);
    input.value = final;
}

