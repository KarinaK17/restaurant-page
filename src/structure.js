function makeStructure() {
  const content = document.getElementById("content");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = "Cafe Carina";
  headerContainer.appendChild(header);

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container");

  const home = document.createElement("div");
  home.classList.add("home");
  home.classList.add("tab");
  home.textContent = "Home";

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.classList.add("tab");
  menu.textContent = "Menu";

  const contacts = document.createElement("div");
  contacts.classList.add("contacts");
  contacts.classList.add("tab");
  contacts.textContent = "Contacts";

  tabContainer.append(home, menu, contacts);

  const tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");

  const footer = document.createElement("footer");
  footer.textContent =
    "Photos by Quang Nguyen Vinh, Kelly Visel, Stefan Schauberger, note thanun";

  const body = document.querySelector("body");

  body.appendChild(footer);

  content.append(headerContainer, tabContainer, tabContent);
}

export { makeStructure };
