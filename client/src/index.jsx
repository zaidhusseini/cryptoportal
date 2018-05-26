import React from 'react';
import ReactDom from 'react-dom';
import Table from './components/CryptoTable.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cryptos: []
    };
  }

  async componentWillMount(){
    let cryptoData = await axios.get('/prices');
    console.log(cryptoData.data);
    this.setState({cryptos:cryptoData.data});
  }

  render(){
    return (<div className="coin-table">
              <Table cryptos={this.state.cryptos} />
            </div>)
  }

}

ReactDom.render(<App />, document.getElementById('app'));