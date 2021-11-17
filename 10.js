function val(num){
 if((num%2) == 0)
 {
   console.log("par");
 }
 else
 {
   console.log("impar");
 }
}
let num;
console.log("numero: ");
process.stdin.on('data',function(data){
  num = data.toString();
  val(num);
  process.exit();
});
