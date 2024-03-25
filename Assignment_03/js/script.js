// Dynamically add student ID and name
document.addEventListener("DOMContentLoaded", function () {
  const otherInfo = document.createElement("div");
  otherInfo.classList.add("otherInfo");
  otherInfo.innerHTML = `
    <p id="studentName">Student Name: Shakshi Babariya</p>
    <p id="studentNumber">Student ID: 200555677</p>
  `;
  document.body.appendChild(otherInfo);
});

// Capture form input values and create Pizza object
document.getElementById("formPizza").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("inptFname").value;
  const lastName = document.getElementById("inptLname").value;
  const crust = document.querySelector('input[name="crust"]:checked').value;
  const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);
  const size = document.getElementById("selSize").value;

  const pizza = new Pizza(firstName, lastName, crust, toppings, size);
  pizza.displayDescription();
});

// Pizza class
class Pizza {
  constructor(firstName, lastName, crust, toppings, size) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.crust = crust;
    this.toppings = toppings;
    this.size = size;
  }

  calculateTotalCost() {
    let cost = 0;
    switch (this.size.toLowerCase()) {
      case "xl":
        cost += 12;
        break;
      case "large":
        cost += 7;
        break;
      case "medium":
        cost += 5;
        break;
      case "small":
        cost += 3;
        break;
    }
    cost += this.toppings.length * 0.99; // Each topping costs 0.99$
    switch (this.crust.toLowerCase()) {
      case "thin":
        cost += 5;
        break;
      case "classic":
        cost += 6;
        break;
      case "deep":
        cost += 8;
        break;
    }
    return cost.toFixed(2);
  }

  displayDescription() {
    const totalCost = this.calculateTotalCost();
    const orderResult = document.getElementById("orderResult");
    orderResult.textContent = `Hello ${this.firstName} ${this.lastName}, you ordered a ${this.size} pizza with ${this.crust} crust and ${this.toppings.join(", ")}. Your total cost is $${totalCost}.`;
    orderResult.style.display = "block";

        // Display total cost in the price element
        const priceElement = document.getElementById("price");
        priceElement.textContent = totalCost;
  }
}
