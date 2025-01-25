import Button from "./components/Button";

function App() {
  return (
    <>
      <Button label="Login" sty="btn btn-success" what={()=>{alert("You are Logged in")}} />
      <Button label="Log Out" sty="btn btn-primary" what={()=>{alert("You are Log Out")}} />
      <Button label="Hiring" sty="btn btn-warning" what={()=>{alert("You are Hired")}} />
      <Button label="Termination" sty="btn btn-danger" what={()=>{alert("You are Fired")}} />
    </>
  );
}

export default App;
