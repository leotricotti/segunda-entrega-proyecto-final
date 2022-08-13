//Declaración de las variables que dan inicio a las operaciones
//Constitucion del saldo inicial
let saldoCajaAhorro = 123343.56;
//Funcion que coinvierte un numero al formato de pesos argentinos
function numeroAPesos(dinero) {
  return (dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(dinero));
}
//Variable que almacena la informacion provista por el usuario
let capturar = document.getElementById("depositos-submit");
//Funcion que captura la informacion brindada por el usuario y la convierte en un objeto
capturar.onclick = () => {  
  // console.log("1");
  class Deposito{
    constructor(fecha, hora, operacion, monto, saldo) {
        this.fecha = fecha;
        this.hora = hora;
        this.operacion = operacion;
        this.monto = monto;
        this.saldo = saldo;
    }
  }
  //Codigo que captura la fecha en que se realiza la operación
  let diaDeposito = new Date().toLocaleDateString();  
  //Codigo que captura la hora en que se realiza la operacion
  let horaDeposito = new Date().toLocaleTimeString();
  //Codigo que informa el tipo de operacion
  let tipoOperacion = "Depósito";
  //Codigo que captura la informacion sobre la operacion provista por el usuario y la devuelve en formato peso argentino
  let depositado = document.getElementById("depositos-input").value;
  //Codigo que parsea el numero ingresado por el usuario
  let dineroDepositado = parseInt(depositado);
  //Codigo que convierte a pesos el dato parseado
  let numeroADinero = numeroAPesos(depositado); 
  //Codigo que actualiza el saldo de la caja de ahorro simulada
  saldoCajaAhorro = dineroDepositado + saldoCajaAhorro;
  //Codigo que convierte a pesos el saldo simulado
  let saldoADinero = numeroAPesos(saldoCajaAhorro);

  nuevoDeposito = new Deposito (diaDeposito, horaDeposito, tipoOperacion, numeroADinero, saldoADinero);
  agreagrDeposito();
}

agreagrDeposito = () => {
  operaciones.unshift(nuevoDeposito);
  console.table(operaciones);
}











