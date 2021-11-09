//import { useState, useEffect, FormEvent } from 'react';
//import { StyledComponentClass } from 'styled-components';
import ToDo from "./components/Todo";
//import Modal from "./components/Modal";
//import * as C from "styled-components";
//import Backdrop from "./components/Backdrop";
import * as C from "./components/App.styles";

function App() {
  return (
    <C.Container>
    <div>
      <div>
        <h1>Modal Template</h1>
      </div>
      <C.Blocklist>
      <ToDo text='FEITO NA UNHA'/>
      <ToDo text='COM REACTJS'/>
      <ToDo text='PORTFOLIO'/>
      <ToDo text='DEVOPS'/>
    
    </C.Blocklist>
    </div>
    </C.Container>
  );
}

export default App;
