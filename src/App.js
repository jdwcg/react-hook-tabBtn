import React, { useState } from "react";

const Header = props => {
  return (
    <div><a href='/' onClick={ e=> {
      e.preventDefault();
      props.onChangeFoo();
    }}>{props.title}</a></div>
  )
}

const Nav = props => {
  return (
    <div onClick={e=>{
      e.preventDefault();
      props.onChangeFoo();
    }}>{props.lis}</div>
  )
}
const ContA = props => {
  return (
    <div>Header is ....</div>
  )
}
const ContB = props => {
  return (
    <div>About us ....</div>
  )
}

const App = () => {
  const navLis = <a href='/'>About</a>

  const [foo, fooset] = useState("tabA");


    let content = null;
    if (foo === "tabA") {
      content = <ContA />;
    } else if (foo === "tabB") {
      content = <ContB />;
    }
  return (
    <div>
      <Header title='Header' onChangeFoo={()=> {
        fooset("tabA");
      }}/>
      <Nav lis={navLis} onChangeFoo={()=>{
        fooset("tabB");
      }} />
      {content}
  </div>
  )
}
export default App;