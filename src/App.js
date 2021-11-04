import ToDo from "./components/Todo";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <div>
        <h1>Modal Template ToDo</h1>
      </div>
      <ToDo text='FEITO NA UNHA'/>
      <ToDo text='COM REACTJS'/>
      <ToDo text='PORTFOLIO'/>
      <ToDo text='DEVOPS'/>
    </div>
  );
}

export default App;
