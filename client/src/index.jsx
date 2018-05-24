import React from 'react';
import ReactDom from 'react-dom';
import Table from './components/CryptoTable.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cryptos: [
        { rank: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 7958,
          marketCap: 350,
          priceChange24hr: 20
        },
        { rank: 2,
          name: 'Ethereum',
          symbol: 'ETH',
          price: 650,
          marketCap: 80,
          priceChange24hr: -10
        },
        { rank: 3,
          name: 'Ripple',
          symbol: 'XRP',
          price: 0.5,
          marketCap: 30,
          priceChange24hr: -10
        }
      ]
    };
  }

  render(){
    return (<div className="container">
              <div className="navigation">
              </div>
              <div className="coin-table">
                <Table cryptos={this.state.cryptos} />
              </div>
            </div>)
  }

}

ReactDom.render(<App />, document.getElementById('app'));