import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Header title={"Contact"} name={"abc name"} />
      <div className="">
        <Input label={"Username"} type={"text"} />
        <Input label={"Password"} type={"password"} />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
