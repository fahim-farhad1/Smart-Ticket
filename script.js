// select seat
let state = 0;
let seatCount = 0;
let seat = document.getElementById("aviableSeatCount");
let SelectedSeat = document.getElementById("Selected-seat");
let billSection = document.getElementById("bill-section");
let BDT = document.getElementById("total-price");
let noSeat = document.getElementById("no-seat");

const seats_obj = {
  A1: false,
  A2: false,
  A3: false,
  A4: false,
  B1: false,
  B2: false,
  B3: false,
  B4: false,
  C1: false,
  C2: false,
  C3: false,
  C4: false,
  D1: false,
  D2: false,
  D3: false,
  D4: false,
  E1: false,
  E2: false,
  E3: false,
  E4: false,
  F1: false,
  F2: false,
  F3: false,
  F4: false,
  G1: false,
  G2: false,
  G3: false,
  G4: false,
  H1: false,
  H2: false,
  H3: false,
  H4: false,
  I1: false,
  I2: false,
  I3: false,
  I4: false,
  J1: false,
  J2: false,
  J3: false,
  J4: false,
}
function selectSeat(id) {
  let doc = document.getElementById(id);
  if (seats_obj[id] === false) {
    doc.style.backgroundColor = "#1dd100";
    doc.style.color = "#fff";
    let availableSeat = parseInt(seat.innerText) - 1;
    let newSelectedSeat = parseInt(SelectedSeat.innerText) + 1;
    seat.innerText = availableSeat;
    SelectedSeat.innerText = newSelectedSeat;

    let setNumber = document.getElementById(id);
    let div = document.createElement("div");
    div.classList.add("grey-text", "align");
    div.setAttribute("id", id + "selected_seat");
    let seatNumP = document.createElement("p");
    let seatClassP = document.createElement("p");
    let seatPriceP = document.createElement("p");
    seatNumP.innerText = setNumber.innerText;
    seatPriceP.innerText = "550";
    seatClassP.innerText = "Economy";
    billSection.appendChild(div);
    div.appendChild(seatNumP);
    div.appendChild(seatClassP);
    div.appendChild(seatPriceP);

    // price calculation
    let ticketPrice = 550;
    let totalPrice = parseInt(BDT.innerText) + ticketPrice;
    BDT.innerText = totalPrice;

    seats_obj[id] = true;
    seatCount++;
  } else {
    doc.style.backgroundColor = "#fff";
    doc.style.color = "#737373";

    let availableSeat = parseInt(seat.innerText) + 1;
    let newSelectedSeat = parseInt(SelectedSeat.innerText) - 1;
    seat.innerText = availableSeat;
    SelectedSeat.innerText = newSelectedSeat;
    let removedChild = document.getElementById(id + "selected_seat");
    billSection.removeChild(removedChild);

    let ticketPrice = 550;
    let totalPrice = parseInt(BDT.innerText) - ticketPrice;
    BDT.innerText = totalPrice;

    seats_obj[id] = false;
    seatCount--;
  }
  console.log(seatCount);
}
