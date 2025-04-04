import { Reserva } from "./modal";

class hotel {
  noches: number;
  total: number;
  subtotal: number;
  tipoHabitacion: string;
  pax: number;

  constructor(reserva: Reserva) {
    this.noches = reserva.noches;
    this.tipoHabitacion = reserva.tipoHabitacion;
    this.total = 0;
    this.subtotal = 0;
    this.pax = reserva.pax
  }

  calculaPrecio() {
    if (this.tipoHabitacion === "standard") {

      this.subtotal = (100 * this.noches) + ((this.pax - 1) * 40 * this.noches);
      this.total = this.subtotal * 1.21;
    }
    if (this.tipoHabitacion === "suite") {
        this.subtotal = 150 * this.noches;
        this.total = this.subtotal * 1.21;
    }
  }
}

const reservas: Reserva = {
  tipoHabitacion: "standard",
  desayuno: false,
  pax: 3,
  noches: 1,
};

const particular = new hotel(reservas);
particular.calculaPrecio();
console.log(particular.subtotal);
console.log(particular.total);
