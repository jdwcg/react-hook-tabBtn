import React, { useState, useRef, useEffect } from "react";
import './App.css';
const App = () => {
   const [cont, setCont] = useState('welcome');

   let content = null;
   if(cont==='welcome') {
      content = <div>welcome....is.....</div>
   } else if (cont === 'read') {
      content = <div>item....is.....</div>
   }

   const heighL = useRef();
   const btnWidth = useRef();
   useEffect(()=> {
      heighL.current.style.width = btnWidth.current.offsetWidth + 'px';
      heighL.current.style.height = btnWidth.current.offsetHeight + 'px';
   })

   function sliding () {
      heighL.current.style.left = btnWidth.current.offsetWidth + 'px';
   }
   function sliding2 () {
      heighL.current.style.left = 0 + 'px';
   }

   return(
      <div>
         <div>
            <div>
            <button ref={btnWidth} onClick={()=> {
               setCont('welcome')
               sliding2()
               
            }}>click</button>
            <button  ref={btnWidth} onClick={()=> {
               setCont('read')
               sliding()
            }}>click</button>
            </div>
            <span ref={heighL} className="hL"></span>
         </div>
         <div> {content} </div>
      </div>
   )
}
export default App;