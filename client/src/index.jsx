import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (<div>
            yo! This is your React App
            </div>)
  }

}

ReactDom.render(<App />, document.getElementById('app'));