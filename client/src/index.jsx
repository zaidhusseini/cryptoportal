import React from 'react';
import ReactDom from 'react-dom';
import Table from './components/CryptoTable.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cryptos: [],
      pricesReceived: false
    };
  }

  async componentWillMount(){
    let cryptoData = await axios.get('/prices');
    console.log(cryptoData.data);
    setTimeout(()=>this.setState({
      cryptos:cryptoData.data,
      pricesReceived: true
    }), 1000);
  }

  render(){
    let display = (<div className="loader-container"> 
                    <div className="loader"> </div>
                   </div>)

    if (this.state.pricesReceived){
      display = <Table cryptos={this.state.cryptos} />;
    }

    return (<div className="coin-table">
              {display}
            </div>)
  }

}

ReactDom.render(<App />, document.getElementById('app'));