cal = ()=>{
  var t = calculator.txt.value;
  try{
    eval(t);

    document.calculator.txt.value = eval(t);
  }catch(e){
    document.querySelector('.error').innerHTML = "<i>Write the correct format</i>";
    document.calculator.txt.value = '';
    setInterval(()=>{
      document.querySelector('.error').innerHTML = "";
    },5000);
  }
}