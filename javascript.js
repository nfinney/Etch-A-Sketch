// INITIATING VARIABLES
const body = document.querySelector('body');
let container = document.createElement('div');
let title = document.createElement('h1');
let buttonNames = ['Reset Board', 'Random Colors', 'Default Color', 'Erase'];
let buttonContainer = document.createElement('div');
let fragment = document.createDocumentFragment(); // variable to hold all the divs and add them all at once versus 
let buttonFragment = document.createDocumentFragment(); // variable to hold all the buttons
let squaresPerSide = 16;


// SETTING VARIABLE CSS PROPERTIES
body.style.margin = '0';
body.style.padding = '0';

title.textContent = "Etch-A-Sketch";
title.style.margin = '100px auto 50px auto';
title.style.textAlign = 'center';
title.style.width = '100vw';

buttonContainer.style.display = 'inline-block';

container.classList.toggle('container');
container.style.border = '10px solid red';
container.style.display = 'grid';
container.style.height = '600px';
container.style.margin = '-280px auto';
container.style.width = '600px';
container.style.gridTemplateColumns = 'repeat(' + squaresPerSide + ', 1fr)';
container.style.gridTemplateRows = 'repeat(' + squaresPerSide + ', 1fr)';



// FUNCTION THAT CREATES ALL THE DIVS FOR THE GRID
function createDivs(squaresPerSide) {
    for(var i=0; i < (Math.pow(squaresPerSide, 2)); i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'square-'+i;
        newDiv.className = 'gridbox';
        newDiv.style.border = '1px solid black';
        newDiv.dataset.mouseCount = 0;
        // newDiv.addEventListener('mouseenter', mousedOver);
        // newDiv.addEventListener('mouseover', returnRGB(true) );
        returnRGB(newDiv, true);
        fragment.appendChild(newDiv);
    }
}

// FUNCTION THAT CREATES THE BUTTONS ON THE LEFT SIDE OF THE PAGE
function createButtons(buttonNames) {
    for(i = 0; i < buttonNames.length; i++){
        var newButtons = document.createElement('button');
        newButtons.id = buttonNames[i];
        newButtons.className = 'menuButton';
        newButtons.style.cursor = 'pointer';
        newButtons.textContent = buttonNames[i];
        newButtons.addEventListener('click', whichButton);
        buttonFragment.appendChild(newButtons);
    }
};

// FUNCTION THAT DETERMINES WHICH BUTTON WAS PRESSED AND EXECUTES BUTTON'S GOAL/TASK
function whichButton(e) {
    let buttonID = e.target.id;
    console.log(buttonID);
    switch(buttonID){
        case 'Reset Board':
            break;
        case 'Random Colors':
            //the {} allows us to pass the event item and other variables to the outside function returnRGB()
            // document.querySelectorAll('.gridbox').forEach(element => element.removeEventListener('mouseover', returnRGB(), false ));
            // document.querySelectorAll('.gridbox').forEach(element => element.addEventListener('mouseover', function(){ returnRGB(e.target, false) } )); 
            // document.querySelectorAll('.gridbox').forEach(element => returnRGB(false)); 
            document.querySelectorAll('.gridbox').forEach(element => returnRGB(element, false));

            break;
        case 'Default Color':
            // document.querySelectorAll('.gridbox').forEach(element => element.removeEventListener('mouseover', returnRGB(), false ));
            // document.querySelectorAll('.gridbox').forEach(element => element.addEventListener('mouseover', function(){ returnRGB(e.target, true) } ));
            // document.querySelectorAll('.gridbox').forEach(element => element.addEventListener('mouseover', () => e.target.style.backgroundColor = returnRGB(true)));
            // document.querySelectorAll('.gridbox').forEach(element => returnRGB(true)); 
            document.querySelectorAll('.gridbox').forEach(element => returnRGB(element, true));
            break;
        case 'Erase':
            document.querySelectorAll('.gridbox').forEach(element => element.style.backgroundColor = 'white');
            document.querySelectorAll('.gridbox').forEach(element => element.dataset.mouseCount = 0);
            break;
    }
}

function test(input) {
    input.addEventListener('mouseover', returnRGB(false) );
    // console.log(input);
}

// FUNCTION THAT RETURNS RGB HUE FOR THE 'RANDOM COLOR' BUTTON
// function returnRGB(isDefaultColor, mouseCount = 0) {
function returnRGB(element, isDefaultColor, mouseCount = 0) {
    // console.log(element);
    // console.log('default is ' + isDefaultColor);
    element.removeEventListener('mouseover', returnRGB, false);
    if(isDefaultColor){
        console.log('in default');
        // console.log(element);
        element.addEventListener('mouseover', () => element.style.backgroundColor = 'yellowGreen');
        // return 'yellowGreen';
        // removeEventListener('mouseover', returnRGB, false);
        // return e => e.target.style.backgroundColor = 'yellowGreen';
    } else {
        console.log('in random');
        element.addEventListener('mouseover', () => element.style.backgroundColor = 'purple');
        // removeEventListener('mouseover', returnRGB, true);
        // return e => e.target.style.backgroundColor = 'purple';
        // return 'purple';
    }
}





// CALL FUNCTIONS TO INITIATE SQUARES AND THE WAY THEY WORK 
// MUST BE DONE BEFORE ADDING ADDING VARIABLES TO HTML
createDivs(squaresPerSide);
createButtons(buttonNames);


// ADD VARIABLES TO HTML
container.appendChild(fragment);
buttonContainer.appendChild(buttonFragment);
body.appendChild(title);
body.appendChild(buttonContainer);``
body.appendChild(container);
