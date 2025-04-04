import { reservas } from "./modal";
import { Reserva } from "./modal";

class hotel {
  noches: number;
  total: number;
  subtotal: number;
  tipoHabitacion: string;
  precioHabitacion: number;
  pax: number;
  desayuno: boolean;
  cargoDesayuno: number;
  cargoPersonaAdicional: number;

  constructor(reserva: Reserva) {
    this.noches = reserva.noches;
    this.tipoHabitacion = reserva.tipoHabitacion;
    this.total = 0;
    this.subtotal = 0;
    this.pax = reserva.pax;
    this.desayuno = reserva.desayuno;
    this.cargoDesayuno = this.cargoDesayunoHandler();
    this.cargoPersonaAdicional = (this.pax - 1) * 40 * this.noches;
    this.precioHabitacion = this.precioHabitacionHandler();
  }

  precioHabitacionHandler() {
    if (this.tipoHabitacion === "standard") {
      return 100;
    }
    if (this.tipoHabitacion === "suite") {
      return 150;
    }
    return 0;
  }

  cargoDesayunoHandler() {
    if (this.desayuno) {
      return 15 * this.noches + this.pax;
    } else {
      return 0;
    }
  }
}

class hotelParticular extends hotel {
  constructor(reserva: Reserva) {
    super(reserva);
  }

  calculaPrecio() {
    this.subtotal =
      this.precioHabitacion * this.noches +
      this.cargoPersonaAdicional +
      this.cargoDesayuno;
    this.total = this.subtotal * 1.21;
  }
}

class hotelTourOperator extends hotel {
  descuentoEspecial: number;

  constructor(reserva: Reserva) {
    super(reserva);
    this.precioHabitacion = 100 * this.noches;
    this.descuentoEspecial = 0.85;
  }

  calculaPrecio() {
    this.subtotal =
      (this.precioHabitacion +
        this.cargoPersonaAdicional +
        this.cargoDesayuno) *
      this.descuentoEspecial;
    this.total = this.subtotal * 1.21;
  }
}

//Resultado Caso A
console.log("Particular:");
const particular0 = new hotelParticular(reservas[0]);
particular0.calculaPrecio();
console.log(
  "Precio subtotal",
  particular0.subtotal,
  "Precio total",
  particular0.total
);

const particular1 = new hotelParticular(reservas[1]);
particular1.calculaPrecio();
console.log(
  "Precio subtotal",
  particular1.subtotal,
  "Precio total",
  particular1.total
);

const particular2 = new hotelParticular(reservas[2]);
particular2.calculaPrecio();
console.log(
  "Precio subtotal",
  particular2.subtotal,
  "Precio total",
  particular2.total
);

//Resultado Caso B
console.log("Tour Operator:");
const operator0 = new hotelTourOperator(reservas[0]);
operator0.calculaPrecio();
console.log(
  "Precio subtotal",
  operator0.subtotal,
  "Precio total",
  operator0.total
);

const operator1 = new hotelTourOperator(reservas[1]);
operator1.calculaPrecio();
console.log(
  "Precio subtotal",
  operator1.subtotal,
  "Precio total",
  operator1.total
);

const operator2 = new hotelTourOperator(reservas[2]);
operator2.calculaPrecio();
console.log(
  "Precio subtotal",
  operator2.subtotal,
  "Precio total",
  operator2.total
);
