import React from 'react';

const Table = (props)=> {

       return (<table>
                  <tr className="table-headers">
                    <th>Rank</th>
                    <th>Crypto</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>% Change</th>
                  </tr>
                  {props.cryptos.map(
                    ({rank, name, symbol, price, marketCap, priceChange24hr})=> 
                      <Crypto rank={rank} 
                              name={name} 
                              symbol={symbol} 
                              price={price} 
                              marketCap={marketCap} 
                              priceChange24hr={priceChange24hr} />)}
                </table>)

}


const Crypto = (props)=> {

  return (<tr>
            <td>{props.rank}</td>
            <td>{props.name}</td>
            <td>{props.symbol}</td>
            <td>{props.price}</td>
            <td>{props.marketCap}</td>
            <td>{props.priceChange24hr}</td>
          </tr>)

}

export default Table;