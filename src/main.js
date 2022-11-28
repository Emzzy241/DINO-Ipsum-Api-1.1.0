// starting application and doing all of it in one file because that's what the version 1.0.0 is all about --NO separation of concern, logic(business and UI), check out version 1.1.0


// this is my webpack entry point file, I need to import all what I would be using for the APPlication first
import $ from "jquery";
import "./css/styles.css";
// import "";


// importing the icon image
import jsImage from "./assets/images/js-badge.svg";


$(document).ready(() =>{

    let iconImg = $(".appImg");
    iconImg.attr("href", jsImage)



});