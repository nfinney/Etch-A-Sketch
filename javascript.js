// INITIATING VARIABLES
const body = document.querySelector('body');
let container = document.createElement('div');
let title = document.createElement('h1');
let fragment = document.createDocumentFragment(); // variable to hold all the divs and add them all at once versus 
let squaresPerSide = 16;


// SETTING VARIABLE CSS PROPERTIES
body.style.margin = '0';
body.style.padding = '0';

title.textContent = "Etch-A-Sketch";
title.style.margin = '100px auto 50px auto';
title.style.textAlign = 'center';
title.style.width = '100vw';

container.classList.toggle('container');
container.style.border = '10px solid red';
container.style.display = 'grid';
container.style.height = '600px';
container.style.margin = '0 auto';
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
        newDiv.addEventListener('mouseenter', e => e.target.classList.add('moused-over') );
        fragment.appendChild(newDiv);
    }
}

// function mousedOver(e) {
//     console.log(e.target);

// }


// CALL FUNCTIONS TO INITIATE SQUARES AND THE WAY THEY WORK 
// MUST BE DONE BEFORE ADDING ADDING VARIABLES TO HTML
createDivs(squaresPerSide);


// ADD VARIABLES TO HTML
container.appendChild(fragment);
body.appendChild(title);
body.appendChild(container);