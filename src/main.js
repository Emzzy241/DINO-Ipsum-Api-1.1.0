// the business logic of my application

// this is my webpack entry point file, I need to import all what I would be using for the APPlication first
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";


// importing the icon image and dino image
import jsImage from "./assets/images/js-badge.svg";
import dinoImage from "./assets/images/dno1.png";

// importing DinoService class already written in me business logic file
import {DinoService} from "./dino-service.js";

// a function for clearing all fields(the DOM) anytime user wants to search for dinosaurs
function clearFields() {
    $("#numParagraphs").val("");
    $("#numWords").val("");
    $(".error").text("");
    $(".dOne").text("");
    $(".dTwo").text("");
    $(".dThree").text("");
    $(".dFour").text("");
}

$(document).ready(() =>{
    
    // for the imported Javascript logo for application
    let iconImg = $(".appImg");
    iconImg.attr("href", jsImage);

    // for the imported dinosaur image
    let dinoImg = $(".dinoImg");
    dinoImg.attr("src", dinoImage);

    // working with my api call when users submit the form
    
    $("#dinoForm").submit((event) =>{
        // preventing submit button from refreshing the page
        event.preventDefault();

        // showing the result div when form is submitted
        $(".result").show();

        // getting the number of dinosaur paragraph user wants
        let noOfDinosaursParagraph = $("#numParagraphs").val();
        

        let noOfDinosaursNames = $("#numWords").val();
       
        // calling a function for clearing fields everytime me users search for Dinosaurs
        clearFields();

        // a variable that will work with all the codes I wrote in my business logic file
        let myPromise = DinoService.findSomeDinos(noOfDinosaursParagraph, noOfDinosaursNames);

        // a promise.then() method that will help be executed what to do when my promise is either resolved or rejected after I've gotten my response

        myPromise.then((myResponseSuccess) =>{
            // if my request was a success this lines of code handles that 

            // parsing the json so JavaScript sees it as an object and not json
            const dinoBody = JSON.parse(myResponseSuccess);

            // the great thing about the .then() method is that I am able to do things both when my response is a success and when my response failed

            $(".dOne").text(`${dinoBody[0][0]}`);
            $(".dTwo").text(`${dinoBody[0][1]}`);
            $(".dThree").text(`${dinoBody[0][2]}`);
            $(".dFour").text(`${dinoBody[0][3]}`);


        }, function (myResponseFailed){
            $(".error").text(`Sorry There was an error processing your request: ${myResponseFailed} Please try again`);
        });

    });


});
