//Constructor que crea los objetos que van a  simular las operaciones bancarias realizadas por el usuario en el último mes
class Operacion {
    constructor(fecha, hora, operacion, monto, saldo) {
      this.fecha = fecha;
      this.hora = hora;
      this.operacion = operacion;
      this.monto = monto;
      this.saldo = saldo;
    }
  }
  //Creación de los objetos que simulan las oeraciones bancarias utilizando el constructor previamente creado
  //Depositos
  const deposito1 = new Operacion(
    "08/07/2022",
    "15:55",
    "Deposito",
    "$ 15.000.00",
    "$ 125.343.00"
  );
  const deposito2 = new Operacion(
    "17/07/2022",
    "12:34",
    "Deposito",
    "$ 30.000.00",
    "$ 155.343.00"
  );
  const deposito3 = new Operacion(
    "10/07/2022",
    "12:18",
    "Deposito",
    "$ 20.000.00",
    "$ 115.343.00"
  );
  //Pagos realizados
  const pago1 = new Operacion(
    "01/07/2022",
    "11:25",
    "Pago Servicio",
    "$ 2.572.27",
    "$ 130.253.65"
  );
  const pago2 = new Operacion(
    "05/07/2022",
    "10:33",
    "Pago Servicio",
    "$ 5.362.87",
    "$ 127.156.65"
  );
  const pago3 = new Operacion(
    "17/07/2022",
    "08:55",
    "Pago Servicio",
    "$ 1.942.63",
    "$ 122.165.36"
  );
  //Extracciones realizadas
  const extracc1 = new Operacion(
    "14/07/2022",
    "15:55",
    "Extraccion",
    "$ 15.000.00",
    "$ 125.343.54"
  );
  const extracc2 = new Operacion(
    "03/07/2022",
    "12:34",
    "Extraccion",
    "$ 30.000.00",
    "$ 95.343.00"
  );
  const extracc3 = new Operacion(
    "20/07/2022",
    "12:18",
    "Extraccion",
    "$ 20.000.00",
    "$ 115.343.00"
  );
  //Transferencias realizadas
  const trans1 = new Operacion(
    "22/07/2022",
    "18:55",
    "Transferencia",
    "$ 25.000.00",
    "$ 95.343.00"
  );
  const trans2 = new Operacion(
    "19/07/2022",
    "12:34",
    "Transferencia",
    "$ 22.000.00",
    "$ 144.343.00"
  );
  const trans3 = new Operacion(
    "27/07/2022",
    "12:18",
    "Transferencias",
    "$ 20.000.00",
    "$ 123.343.56"
  );
  //Creacion del array de objetos que va a contener a las operaciones bancarias previamente simuladas
  const operaciones = [];
  //Codigo que agrega las operaciones simuladas al array contenedor de objetos
  operaciones.push(
    deposito1,
    deposito2,
    deposito3,
    pago1,
    pago2,
    pago3,
    extracc1,
    extracc2,
    extracc3,
    trans1,
    trans2,
    trans3
  );
  //Funcion que permite ordenar por fecha de realización a las operaciones simuladas
  let ordenados = operaciones.sort((a, b) => {
    if (a.fecha < b.fecha) {
      return 1;
    }
    if (a.fecha > b.fecha) {
      return -1;
    }
  });
  //Código que crea un array de objetos literales que contiene la simulación de las cuentas bancarias que poseé el usuario y su correspondiente saldo
  const cuentas = [
    {
      tipo: "Caja de Ahorro",
      moneda: "$",
      cuenta: "5069-5689756/4",
      identificador: "Cuenta",
      saldo: "$ 123.343,56"
    },
    {
      tipo: "Cta Corriente",
      moneda: "$",
      cuenta: "5069-5689652/4",
      identificador: "Cuenta",
      saldo: "$ 200.000,00"
    },
    {
      tipo: "Caja de Ahorro",
      moneda: "USD",
      cuenta: "5069-5685686/4",
      identificador: "Cuenta",
      saldo: "USD 5.000,00"
    },
  ];