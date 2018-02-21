import printMe from './print.js';
import './style.css';
import _ from 'lodash';

/**
* Main Component
* @return {element} main div
**/
function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Webpack', ' ']);

  btn.innerHTML = 'Check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
};

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the handler
    document.body.appendChild(element);
    });
  }
