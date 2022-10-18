import React from 'react';
import CompareGraph from '../components/ComparePageComponents/CompareGraph';
import SelectCoins from '../components/ComparePageComponents/SelectCoins';
import Header from '../components/Header';

function ComparePage() {
  const [crypto1, setCrypto1] = React.useState("");
  const [crypto2, setCrypto2] = React.useState("");
  const [days, setDays] = React.useState(30);

  return (
    <div>
        <Header />
        <SelectCoins 
          crypto1 = {crypto1}
          crypto2 = {crypto2}
          setCrypto1 = {setCrypto1}
          setCrypto2 = {setCrypto2}
          days = {days}
          setDays = {setDays}
        />
        <CompareGraph />
    </div>
  )
}

export default ComparePage