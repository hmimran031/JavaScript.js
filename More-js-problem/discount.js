function ticketPrice(ticketQuentity) {
  const frist100Rate = 100;
  const second100rate = 90;
  const restTicketrate = 70;
  if (ticketQuentity <= 100) {
    const price = ticketQuentity * frist100Rate;
    return price;
  } else if (ticketQuentity <= 200) {
    const frist100Price = 100 * frist100Rate;
    const restTicketQuantity = ticketQuentity - 100;
    const restTicketprice = restTicketQuantity * second100rate;
    const totalPrice = frist100Price + restTicketprice;
    return totalPrice;
  }
}
const price = ticketPrice(120);
console.log("Price: ", price);
