import app from './base.js';

function Sidebar(){
    let sidebar = document.createElement('div');
    sidebar.innerText = 'Sidebar';
    app.appendChild(sidebar);
} 

export default Sidebar;