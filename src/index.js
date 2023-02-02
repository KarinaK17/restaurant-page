import "./style.css";
import { makeStructure } from "./structure";
import { homeStructure } from "./home";
import { menuStructure } from "./menu";
import { contactsStructure } from "./contacts";

console.log("Hello!!!");
makeStructure();
homeStructure();
// menuStructure();
// contactsStructure();

const homeTab = document.querySelector(".home");
homeTab.addEventListener("click", homeStructure);

const menuTab = document.querySelector(".menu");
menuTab.addEventListener("click", menuStructure);

const contactsTab = document.querySelector(".contacts");
contactsTab.addEventListener("click", contactsStructure);
