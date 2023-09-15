import React, { useState } from 'react';
import Popmoredetail from '../components/Popmoredetail.jsx'
function Career() {
  const [pop, setPop] = useState(false)
    const [pop1, setPop1] = useState(false)
    const [popid, setPopid] = useState("")
  return (
    <div className='Career'>
      
        {/* Your Career page content */}
          <div className='btnsec'>

        <button id='btn' onClick={() => { setPop(true); setPopid(1) }}>advertiser</button>
        {/* <button id='btn'onClick={() => { setPop1(true); setPopid(2) }}>influencer</button> */}
          </div>
          <Popmoredetail trigger={pop} setTrigger={setPop} popid={popid}></Popmoredetail>
        <h1>Welcome to the my name is kahn and i am not a terroist there cano nly be ine </h1>
        <p>This is the Career page content.</p>
      
    </div>
  );
}

export default Career;
