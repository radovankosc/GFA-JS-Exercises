import { Reservation } from "./Reservation";
let reservationList: Reservation[] = [];
for (let i = 0; i < 10; i++) {
  reservationList.push(new Reservation());

  console.log(reservationList[i].printReservation());
}
