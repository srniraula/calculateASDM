function enternum(num) {
    document.form.number.value =   document.form.number.value + num;
    }
function equals(){
    var add = document.form.number.value;
    if(add) {
    document.form.number.value = eval(add);
       
    }
}
function cleard() {
    document.form.number.value = "";
}