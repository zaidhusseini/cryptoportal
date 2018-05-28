import React from 'react';

const Table = (props)=> {

       return (<table>
                  <thead className="table-headers">
                    <th>Rank</th>
                    <th>Crypto</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24hr (% Change)</th>
                  </thead>
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
            <td className="crypto-name"><img src={`icons/${props.symbol.toLowerCase()}.png`} />{` `+ props.name}</td>
            <td>{props.symbol}</td>
            <td>{props.price}</td>
            <td>{props.marketCap}</td>
            <td className={Number(props.priceChange24hr.replace( /%/g, "" )) >= 0 ? "positive-price-change" : "negative-price-change"}>{props.priceChange24hr}</td>
          </tr>)

}

export default Table;