// the business logic of my application

// this is my webpack entry point file, I need to import all what I would be using for the APPlication first
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";


// importing the icon image and dino image
import jsImage from "./assets/images/js-badge.svg";
import dinoImage from "./assets/images/dno1.png";


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
        // clearing this input fields after submitting 
        $("#numParagraphs").val("");

        let noOfDinosaursNames = $("#numWords").val();
        $("#numWords").val("");

        // after taking in my values, its time to make my api call

        // reinstantiating a new xmlhttp request
        let myRequest = new XMLHttpRequest();

        // my api call endpoint
        let myEndpointUrl = `https://dinoipsum.com/api/?format=json&words=${noOfDinosaursNames}&paragraphs=${noOfDinosaursParagraph}`;


        // time to work with api requests
        myRequest.onreadystatechange = function (){
            // telling javascript when my api call response would be ready
            if(this.readyState === 4 && this.status === 200){
                // parsing the json response gotten because I did set my apicall to give a response in json format
                // also the .parse() method is capable of turning javascript object notation(JSON) into javascript objects
                const dinoResponse = JSON.parse(this.responseText);


                // calling a function that gets dinos for users to get executed when my request was successful
                // also while caling this function, I passed in my dinoResponse variable storing the converted javascript object[from json to javascript objects all thanks to JSON.parse();]
                getDinos(dinoResponse);
            }
        }
        // final steps of my call; opening a get request, with the variable I stored my Endpoint in and lastly a boolean that will determine whether I want my request opened or not


        myRequest.open("GET", myEndpointUrl, true);
        myRequest.send();

        // time to write the function I called earlier on that would get executed when my apiCall request was successful

        function getDinos(getMeDinosaurs){
            // getting four dinosaur names for my users
            $(".dOne").text(`${getMeDinosaurs[0][0]}`);
            
            $(".dTwo").text(`${getMeDinosaurs[0][1]}`);
            
            $(".dThree").text(`${getMeDinosaurs[0][2]}`);
            
            $(".dFour").text(`${getMeDinosaurs[0][3]}`);
            
            
        }

    });


});
