
import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"


import "./popmore.css"

const Popmoredetail = (props) => {









    return (props.trigger) ?
        (

            <div key={props.popid} className="popmoredetail" onClick={() => props.setTrigger(false)} >
                <div className="innnerrr">
                    <button style={{display:'none'}}  className="closebtn" id='closebtn' onClick={() => props.setTrigger(false)} >
                        close
                    </button>
                    <label style={{position:"absolute",
    top: "16px",
    right: "16px"}} htmlFor="closebtn"></label>

                   


                </div>

                

            </div>
        

   
    
  ): "";
}

export default Popmoredetail