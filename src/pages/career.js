import React, { useState } from 'react';
import { Form1 } from '../components/Form1';
import {Form2 }from '../components/Form2';
import "../components/form.css";
function Career() {
  const [pop, setPop] = useState("form1")
  
  return (
    <div className='Career'>


      <div className='btnsec'>

        <button id='btn' onClick={() => { setPop("form1");}}>form 1</button>
        <button id='btn' onClick={() => { setPop("form2");}}>form 2</button>

      </div>
      <div className='formbox'>
        
        {(pop === "form1")?<Form1/>:<Form2/>}
        
      </div>
      


    </div>
  );
}

export default Career;
