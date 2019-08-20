import app from './base.js';

function Content(){
    let content = document.createElement('div');
    content.innerText = 'Content';
    app.appendChild(content);
}

export default Content;