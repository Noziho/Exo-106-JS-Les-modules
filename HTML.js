export {createDiv, createInput, createLabel};

function createDiv () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "j'ai pas d'inspi";
    return newDiv;

}

function createInput (type) {
    let newInput = document.createElement('input');
    newInput.type = type;
    newInput.value = "0";
    return newInput;
}

function createLabel (text) {
    let newLabel = document.createElement('label');
    newLabel.innerHTML = text;
    return newLabel;
}