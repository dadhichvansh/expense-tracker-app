import "./style.css";

const form = document.querySelector("#form");
const expenseList = document.querySelector("#expense-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.querySelector("#description").value;
  const category = document.querySelector("#category").value;
  const amount = document.querySelector("#amount").value;

  if (description && category && !isNaN(amount)) {
    const item = document.createElement("tr");
    item.innerHTML = `
      <td>${description}</td>
      <td>${category}</td>
      <td>${amount}</td>
    `;
    expenseList.appendChild(item);

    document.querySelector("#description").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#amount").value = "";
  } else {
    alert("Please fill out all the fields correctly");
  }
});
