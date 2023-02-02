function contactsStructure() {
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";

  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");

  tabContent.appendChild(contactsContainer);

  const mapHeader = document.createElement("h2");
  mapHeader.textContent = "Our Location";

  const map = document.createElement("img");
  map.classList.add("map");
  map.setAttribute("src", "map.png");
  map.setAttribute("alt", "map that shows cafe's location");

  const telHeader = document.createElement("h2");
  telHeader.textContent = "Our telephone number";

  const tel = document.createElement("p");
  tel.classList.add("tel");
  tel.textContent = "+61 2 8332 2099";

  const mailHeader = document.createElement("h2");
  mailHeader.textContent = "Our e-mail";

  const mail = document.createElement("p");
  mail.classList.add("mail");
  mail.textContent = "cafe_carina@gmail.com";

  contactsContainer.append(mapHeader, map, telHeader, tel, mailHeader, mail);
}

export { contactsStructure };
