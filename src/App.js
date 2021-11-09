import React from 'react';
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
          <C.Header><h1>Modal Template</h1></C.Header>
        </div>
        <C.Blocklist>
          <ToDo text="MADE WITH" />
          <ToDo text="REACTJS" />
          <ToDo text="PORTFOLIO" />
          <ToDo text="DEVOPS" />
        </C.Blocklist>
      </div>
    </C.Container>
  );
}


export default App;
