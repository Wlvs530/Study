import app from './base.js';
import avata from '../../img/404.png';
// import '../../css/index.css';
import style from '../../css/index.css';

function Avata(){
    let img = new Image();
    img.src = avata;
    // img.classList.add('avatar');
    console.log(style);
    img.classList.add(style.avatar);
    app.append(img);
}

export default Avata;