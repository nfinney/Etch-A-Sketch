// INITIATING VARIABLES
const body = document.querySelector('body');
let container = document.createElement('div');
let fragment = document.createDocumentFragment(); // variable to hold all the divs and add them all at once versus 
let squaresPerSide = 16;


// SETTING VARIABLE CSS PROPERTIES
body.style.margin = '0';
body.style.padding = '0';
container.classList.toggle('container');
container.style.display = 'grid';
container.style.height = '100vh';
container.style.gridTemplateColumns = 'repeat(' + squaresPerSide + ', 1fr)';
container.style.gridTemplateRows = 'repeat(' + squaresPerSide + ', 1fr)';


// FUNCTION THAT CREATES ALL THE DIVS FOR THE GRID
function createDivs(squaresPerSide) {
    for(var i=0; i < (Math.pow(squaresPerSide, 2)); i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'square-'+i;
        newDiv.className = 'gridbox';
        // newDiv.addEventListener('mousenter', e => e.classList.add('moused-over'));
        fragment.appendChild(newDiv);
    }
}

// function add


// CALL FUNCTIONS TO INITIATE SQUARES AND THE WAY THEY WORK 
// MUST BE DONE BEFORE ADDING ADDING VARIABLES TO HTML
createDivs(squaresPerSide);


// ADD VARIABLES TO HTML
container.appendChild(fragment);
body.appendChild(container);