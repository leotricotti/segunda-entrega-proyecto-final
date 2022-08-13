//Codigo que captura el boton que confirma la operacion
const captura = document.getElementById("depositos-submit");
//Codigo que captura el boton que modifica la operacion 
const clean = document.getElementById("limpiar-campo");
//Codigo que captura el campo donde el usuario debe ingresar la cantidad de dinerao que desea depsositar
let inputDepositos = document.getElementById("depositos-input");
//Funcion que captura la informacion brindada por el usuario y la convierte en un objeto
captura.onclick = () => {
  // Constructor del objeto depositos;
  class Deposito {
    constructor(fecha, hora, operacion, monto, saldo) {
      this.fecha = fecha;
      this.hora = hora;
      this.operacion = operacion;
      this.monto = monto;
      this.saldo = saldo;
    }
  }
  //Funcion que captura la fecha en que se realiza la operación
  capturarDiaDeposito = () => new Date().toLocaleDateString();
  //Funcion que captura la hora en que se realiza la operacion
  capturarHoraDeposito = () => new Date().toLocaleTimeString();
  //Codigo que informa el tipo de operacion
  nombrarOperacion = () => "Depósito";
  //Codigo que captura la informacion sobre la operacion provista por el usuario
  const depositado = document.getElementById("depositos-input").value;
  //Codigo que parsea el numero ingresado por el usuario
  parsearDineroDepositado = () => parseInt(depositado);
  //Codigo que actualiza el saldo de la caja de ahorro simulada
  actualizarSaldoCajaAhorro = () => {
    saldoCajaAhorro = parsearDineroDepositado() + saldoCajaAhorro;
    return saldoCajaAhorro;
  }
  //Codigo que convierte a pesos el dato parseado
  numeroADinero = () => numeroAPesos(depositado);
  //Codigo que convierte a pesos el saldo simulado
  convertirSaldoADinero = () => numeroAPesos(actualizarSaldoCajaAhorro());
  //Funcion que coinvierte un numero al formato de pesos argentinos
  numeroAPesos = (dinero) => {
    return (dinero = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(dinero));
  }
  nuevoDeposito = new Deposito(
    capturarDiaDeposito(),
    capturarHoraDeposito(),
    nombrarOperacion(),
    numeroADinero(),
    convertirSaldoADinero()
  );
  //Llamada a la funcion que agrega el deposito realizado al array de operaciones
  agreagrDeposito();
};
//Funcion que agrega el deposito realizado al array de operaciones que funciona como base de datos
agreagrDeposito = () => {
  operaciones.unshift(nuevoDeposito);
  console.table(operaciones);
};
// Funcion que limpia el campo input en caso de que el usuario quiera modificar el importe a depositar
clean.onclick = () => {
 inputDepositos.value = "";
}

