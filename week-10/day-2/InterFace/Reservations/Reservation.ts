import { Reservationy } from "./Reservationy";

export class Reservation implements Reservationy {
  //   _code: string;
  //   _dow: string;
  //   constructor(code: string, dow: string) {
  //     this._code = code;
  //     this._dow = dow;
  //   }
  getDowBooking(): string {
    const dow: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    let randomIndex = Math.floor(Math.random() * dow.length);
    let randomDow = dow[randomIndex];
    return randomDow;
  }

  getCodeBooking(): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let arr: string[] = [];
    for (let i = 0; i < 8; i++) {
      let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
      arr.push(letter);
    }
    return arr.toString().replace(/,/gi, "");
  }
  printReservation(): string {
    return "Booking# " + this.getCodeBooking() + " for " + this.getDowBooking();
  }
}
