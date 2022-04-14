import React, { useState, useRef} from "react";
import'./App.css';
const TabA = props => {
   return(
      <button onClick={()=>{
         props.onChangeFoo()
      }}> { props.title } </button>
   )
}
const TabB = props => {return(<button onClick={()=>{props.onChangeFoo()}}> { props.title } </button>)}

const App = () => {

   const [foo, setFoo] = useState("aaa");
   let content = null;
   if(foo === "aaa") {
      content = <div>aaaaaaaaaaaaaaa</div>
   } else if(foo === "bbb") {
      content = <div>bbbbbbbbbbb</div>
   }

   let highL = useRef();
   
   function sliding () {
      let newWidth = highL.current;
      let newWidthSliding = newWidth.offsetWidth;
      console.log(newWidthSliding)
      let slidingElem = highL.current;
      console.log(slidingElem)
      slidingElem.style.left = newWidthSliding + 'px';
   }
   function sliding1 () {
      let newWidth = highL.current;
      let newWidthSliding = newWidth.offsetWidth;
      console.log(newWidthSliding)
      let slidingElem = highL.current;
      console.log(slidingElem)
      slidingElem.style.left = 0 + 'px';
   }

   return (
      <div className="contain">
         <div>
            <TabA title='aaa' onChangeFoo = { () => {
               setFoo("aaa");
               sliding1();
            } } />
            
            <TabB title='bbb' onChangeFoo = { () => {
               setFoo("bbb"); 
               sliding(); 
               } } />
         </div>

         <span className='highL' ref={highL}></span>

         {content}
      </div>
   )
}

export default App;