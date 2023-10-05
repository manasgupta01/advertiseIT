import React, { useState } from 'react'

export const Form1 = () => {
  const [fdata,setdata]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    message:'',
  });
  const [dis,setdis]=useState("none")
  const handelsub=(e)=>{
      e.preventDefault();
      console.log(fdata);
  };
  const inputeve =(e)=>{
    console.log(e.target.name);
    const {name,value}=e.target;

    setdata((prevData)=>(
      {
        ...prevData,[name]:value,
      }
    ))
  };
  
  
  const register=async()=>{
    //write the server code here to send data.
    setdis("none");
    
    
    
   
  }

  return (
    <div className='form1'>
         <div className='chr1'>
      <div className="head1">

      <h1>form1</h1>
     
      
      </div>
        <div className="container container1">

          <form onSubmit={handelsub} action="" method="get">
           
            <div className="formarea">
            <input name='fname'  onChange={inputeve} type="text" placeholder="First Name" />
            <input name='lname'  onChange={inputeve} type="text" placeholder="Last Name" />
            <input name='email'  onChange={inputeve} type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" />
            <input name='phone'  onChange={inputeve}  type="text" pattern="[6-9]{1}[0-9]{9}" placeholder="Contact Number*" />
            <input name='message'  onChange={inputeve} type="text" placeholder="What do you expect from us?" />
            </div>
            
           <div className="btnn">

            <h5 style={{display:dis}}>please fill the form</h5>
            <input  type="submit" onClick={register} value="Submit"  /><br />
           </div>
            

          </form>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>

        </div>
     

    </div>

    </div>
  )
}
