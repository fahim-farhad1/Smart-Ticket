// select seat
let state = 0;
let seatCount = 0;
let seat = document.getElementById("aviableSeatCount");
let SelectedSeat = document.getElementById("Selected-seat");
let billSection = document.getElementById("bill-section");
let BDT = document.getElementById("total-price");

function selectSeat(id) {
  let doc = document.getElementById(id);
  if (state == 0) {
    doc.style.backgroundColor = "#1dd100";
    doc.style.color = "#fff";
    let aviableSeat = parseInt(seat.innerText) - 1;
    let newSelectedSeat = parseInt(SelectedSeat.innerText) + 1;
    seat.innerText = aviableSeat;
    SelectedSeat.innerText = newSelectedSeat;

    let setNumber = document.getElementById(id);
    let noSeat = document.getElementById("no-seat");
    noSeat.hidden = true;
    let div = document.createElement("div");
    div.classList.add("grey-text", "align");
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
    console.log(totalPrice);

    state = 1;
    seatCount++;
    console.log(seat.innerText, seatCount);
  } else {
    doc.style.backgroundColor = "#fff";
    state = 0;
  }
}
