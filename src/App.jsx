import React, { useState,useEffect} from 'react'
import axios from 'axios';
function  App() {
      const [state,setState]=useState([]);
      useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res)=>{
          setState(res.data);
        console.log(res.data);
        }).catch((err)=>{
          console.log(err.message);
        });
      },[]);
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>symbol</th>
            <th>current_price</th>
            <th>market_cap</th>
            <th>price_change_percentag_24</th>
          </tr>
        </thead>
        {state.slice(0,10).map((item,index)=>{
          return <tbody key={index}>
            <tr>
              <td>{item.name} </td>
              <td>{item.symbol}</td>
              {
                
              }
              <td style={{}}>{item.current_price}</td>
              <td>{item.market_cap}</td>
              {
                item.price_change_percentage_24h<0?<td style={{color:"red"}}>{item.price_change_percentage_24h}</td>:<td style={{color:"green"}}>{item.price_change_percentage_24h}</td>
              }
             
            </tr>
          </tbody>
        })}
      </table>
    </div>
  )
}
export default App
