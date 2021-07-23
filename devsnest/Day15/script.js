'use strict';

const e = React.createElement;
function COmp() {
        return e(
      'button',
        {  },
       'ClickMe'
     );
}
const domContainer = document.querySelector('#IamGroot');
ReactDOM.render(e(COmp), domContainer);