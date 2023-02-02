function menuStructure() {
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  tabContent.appendChild(menuContainer);

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  const description1 = document.createElement("div");
  const header1 = document.createElement("h4");
  header1.classList.add("menu-item-header");
  header1.textContent = "Fresh Salad";
  const ingridients1 = document.createElement("p");
  ingridients1.classList.add("ingridients");
  ingridients1.textContent =
    "Our fresh green salad is a great dish to start your lunch or dinner. it includes different types of greens, onion, tomato, cucumbers and croutons";
  const price1 = document.createElement("p");
  price1.classList.add("price");
  price1.textContent = "10.00 $";
  const img1 = document.createElement("img");
  img1.setAttribute("src", "salad.jpg");
  img1.setAttribute("alt", "fresh salad");

  description1.append(header1, ingridients1, price1);

  menuItem1.append(description1, img1);
  //
  //

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  const description2 = document.createElement("div");
  const header2 = document.createElement("h4");
  header2.classList.add("menu-item-header");
  header2.textContent = "Red sauce pasta";
  const ingridients2 = document.createElement("p");
  ingridients2.classList.add("ingridients");
  ingridients2.textContent =
    "This freshly cooked spaghetti with tomato sauce garnished with cheese and bazil is a simple yet very flavourful dish";
  const price2 = document.createElement("p");
  price2.classList.add("price");
  price2.textContent = "15.00 $";
  const img2 = document.createElement("img");
  img2.setAttribute("src", "pasta.jpg");
  img2.setAttribute("alt", "pasta with red sauce");

  description2.append(header2, ingridients2, price2);

  menuItem2.append(description2, img2);

  //
  //

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  const description3 = document.createElement("div");
  const header3 = document.createElement("h4");
  header3.classList.add("menu-item-header");
  header3.textContent = "Waffles with ice cream and chocolate sauce";
  const ingridients3 = document.createElement("p");
  ingridients3.classList.add("ingridients");
  ingridients3.textContent =
    "Soft on the inside and crispy on the outside these warm waffles make a great pairing with cold vanilla ice cream.";
  const price3 = document.createElement("p");
  price3.classList.add("price");
  price3.textContent = "12.50 $";
  const img3 = document.createElement("img");
  img3.setAttribute("src", "waffles.jpg");
  img3.setAttribute("alt", "waffles with ice cream and chocolate sauce");

  description3.append(header3, ingridients3, price3);

  menuItem3.append(description3, img3);

  //
  //

  menuContainer.append(menuItem1, menuItem2, menuItem3);
}

export { menuStructure };
