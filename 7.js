let frases = [];
let cont = 0;
console.log("Para salir escribe salir");
console.log("frase: ");
process.stdin.on('data', function(data){
    frases.push(data.toString().trim());
    if(frases[frases.length - 1] == "salir" || "SALIR"){
      process.exit();}
    cont++;
    console.log("van " + cont + " frases.\n");
});
