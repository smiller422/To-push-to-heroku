//this will handle all the clicks for the choices

const pizzaChoiceHandler = async (event) => {
  event.preventDefault();
  let size;
  let sauce;
  let toppings = [];

  if (document.getElementById("small").checked) {
    size = document.getElementById("small").value;
  } else if (document.getElementById("medium").checked) {
    size = document.getElementById("medium").value;
  } else {
    size = document.getElementById("large").value;
  }

  if (document.getElementById("hearty-marinara").checked) {
    sauce = document.getElementById("hearty-marinara").value;
  } else if (document.getElementById("honey-bbq").checked) {
    sauce = document.getElementById("honey-bbq").value;
  } else {
    sauce = document.getElementById("garlic-parmesan").value;
  }

  if (document.getElementById("pepperoni").checked) {
    toppings.push(document.getElementById("pepperoni").value);
  }
  if (document.getElementById("sausage").checked) {
    toppings.push(document.getElementById("sausage").value);
  }
  if (document.getElementById("meatball").checked) {
    toppings.push(document.getElementById("meatball").value);
  }

  if (document.getElementById("ham").checked) {
    toppings.push(document.getElementById("ham").value);
  }
  if (document.getElementById("onions").checked) {
    toppings.push(document.getElementById("onions").value);
  }
  if (document.getElementById("spinach").checked) {
    toppings.push(document.getElementById("spinach").value);
  }

  console.log(size, sauce, toppings);

  const response = await fetch('/api/pizza/order', {
    method: 'POST',
    body: JSON.stringify({ size, sauce, toppings }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/menu/confirm');
  } else {
    alert(response.statusText);
  }
};

document
  .getElementById("pizza-order-form")
  .addEventListener("submit", pizzaChoiceHandler);

//event litner for the pizza choices based on datatype,
