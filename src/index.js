import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebSocket from './js/WebSocket.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

WebSocket();


function res(width, height, timeout, validation) {
  var item = document.querySelector('.textareaRes');
  var div=document.querySelector('#divRes');
	
  if((width == item.offsetWidth) && (height == item.offsetHeight)) {
	
    if(validation) {
      console.log("size resize ++++");
      console.log(div.clientWidth- height+"px");
      //div.style.width = div.clientWidth - height+"px";  
    } else {
      timeout = 0;
    }		
    window.setTimeout(res, timeout, width, height, timeout, 0);
		
  } else {
    width = item.offsetWidth;
    height = item.offsetHeight;
    timeout = 0;
    window.setTimeout(res, timeout, width, height, timeout, 1);
  }
	
}
res(0,0,0,0);

//frame.addEventListener("test", null, options);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
