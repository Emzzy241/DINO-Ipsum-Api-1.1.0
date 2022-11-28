// the business logic of my application

export class DinoService {
    static findSomeDinos(noOfDinosaursNames, noOfDinosaursParagraph){
        // to make our api call here, we return a promise instead of storing in a variable like we did before
        return new Promise( function(dinoResolved, dinoRejected){
            // reinstantiating a new xmlhttprequest
            let dinoRequest = new XMLHttpRequest();

            // picking up the endpoint url 
            let myEndpointUrl = `https://dinoipsum.com/api/?format=json&words=${noOfDinosaursNames}&paragraphs=${noOfDinosaursParagraph}`;

            dinoRequest.onload = function(){
                // used a new propery here called onload instead of the onreadystatechange used in version 1.0.0

                // the branch below is to tell JavaScript when my response will be ready after making my apicall
                // in the branch, it says: if the status of my apicall = 200, my response should be ready, 
                // also there is no need for me adding an: if readyState = 4 like I didint version 1.0.0 because I would only get a 200 status code value when the readyState = 4, so there is no need for that

                if(this.status === 200){
                    // getting the dinoRequest.response value whether my branch is true or not
                    dinoResolved(dinoRequest.response);
                }
                else{
                    dinoRejected(dinoRequest.response);
                }

            }

            // opening and sending my api request call
            // the .open() method takes 3 values: 1. the request method I want(which is a GET request, 2. my end point url, 3. A boolean to determine whether I want to go ahead with my api call)
            dinoRequest.open("GET", myEndpointUrl, true);
            dinoRequest.send();




        });
    }
}