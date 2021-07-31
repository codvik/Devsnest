import React from 'react';
class Counter extends React.Component{
      constructor(props){
          super(props);
          this.state={isToogle: 0};
          this.handleClick=this.handleClick.bind(this);
      }

      handleClick(){
          this.setState(prevState=>({
              isToogle:prevState.isToogle+1
          }));
      }
      render(){
          return(
              <button onClick={this.handleClick}>
                  {this.state.isToogle}
              </button>
          );
      }
}
export default Counter;