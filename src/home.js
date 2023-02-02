function homeStructure() {
  console.log("home function");

  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  tabContent.appendChild(homeContainer);

  const photo = document.createElement("img");
  photo.classList.add("photo");
  photo.setAttribute("src", "restaurant.jpg");
  photo.setAttribute("alt", "restaurant photo");

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  homeContainer.append(photo, descriptionContainer);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "We believe that a great meal lets the ingredients shine through. Beautiful ingredients, treated thoughtfully and utilized in their prime, are something to be savored. Dining should be a relaxing experience. From the moment you walk through our doors, we welcome you to join our family and let us take care of the rest.";

  const hoursHeader = document.createElement("h3");
  hoursHeader.classList.add("hours-header");
  hoursHeader.textContent = "Cafe Hours";

  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.textContent = "Tue-Sun  12:00-24:00";

  const locationHeader = document.createElement("h3");
  locationHeader.classList.add("location-header");
  locationHeader.textContent = "Location";

  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = "5 Lime St, Sydney, NSW 2000, Australia";

  const phoneHeader = document.createElement("h3");
  phoneHeader.classList.add("phone-header");
  phoneHeader.textContent = "Book a table";

  const phone = document.createElement("p");
  phone.classList.add("phone");
  phone.textContent = "+61 2 8332 2099";

  descriptionContainer.append(
    description,
    hoursHeader,
    hours,
    locationHeader,
    location,
    phoneHeader,
    phone
  );
}

export { homeStructure };
