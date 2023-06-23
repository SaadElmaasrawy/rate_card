import { useState } from "react";
import Rate from "./components/Rate";
import Thanks from './components/Thanks';

function App() {
  const [rate , setRate] = useState()
  const getData = (data) =>{
    setRate(data)
  }
  return (
    <div className=" bg-[#141519] min-h-screen grid place-content-center">
      {
        rate?<Thanks rate = {rate}/> :<Rate onSubmit = {getData} />
      }

    </div>
  );
}

export default App;
