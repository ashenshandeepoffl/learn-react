import './App.css';

function App() {
  const name = "Ashen";
  return (
    <div className="App">
      <User name = "Ashen" age = {22} email = "ashen@gmail.com"/>
      <User name = "Zaynab" age = {22} email = "zaynab@gmail.com"/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

export default App;
