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
        // newDiv.addEventListener('mouseenter', mousedOver);
        newDiv.addEventListener('mouseover', e => e.target.classList.add('moused-over') );
        fragment.appendChild(newDiv);
    }
}

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

function whichButton(e) {
    let buttonID = e.target.id;
    console.log(buttonID);
    switch(buttonID){
        case 'Reset Board':
            break;
        case 'Random Colors':
            break;
        case 'Default Color':
            break;
        case 'Erase':
            document.querySelectorAll('div').forEach(element => element.classList.remove('moused-over'));
            break;
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
