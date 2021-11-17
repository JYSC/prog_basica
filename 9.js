function validar(no){
  if(no<0){
  console.log("negativo");
  }else{
  console.log("positivo");
  }
}
let no;
console.log("Ingresa un numero: ");
process.stdin.on('data',function(data){
  num = data.toString().trim();
  validar(no);
  process.exit();
})
