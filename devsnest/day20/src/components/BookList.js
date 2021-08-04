import React, { Component } from 'react';

class BookList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>The way of the kings</li>
                    <li>the  name of the aurthodox</li>
                    <li>an finally nothing to say</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;