import {createDiv, createInput, createLabel} from './HTML.js';

let result = document.getElementById('result');
result.append(createDiv(), createLabel('E-mail: '), createInput('email'), createLabel('Password: '), createInput('password') );