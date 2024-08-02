import diam from "./assets/diamond.png";
import bomb from "./assets/bombb.png";
import "./App.css";
import { useState } from "react";

const images = [diam,diam,diam,bomb, diam];

function App() {

  const [state, setState] = useState(true);
  const[money,setMoney]=useState(0);
  const [amount,setAmount]=useState(0)
  function minesplay(event: any) {
    // document.getElementsByTagName("img")[0].style.opacity = "1";
    const randomImage = images[Math.floor(Math.random() * images.length)];
    // if(randomImage==bomb)

   if(money!=0)
   {
        if (randomImage == bomb) {
          event.target.style.backgroundImage = `url(${randomImage})`;
          event.target.style.backgroundColor = "red";
          setState(false);
          setMoney(0);
        } else {
          event.target.style.backgroundImage = `url(${randomImage})`;
          event.target.style.backgroundColor = "lightgreen";
          let temp = (money * 1.25).toPrecision(2)
          setMoney(Number(temp));
        }
   }
  }
  function newfunction()
  {
    // console.log("hello");
    
  }

  function backfromgame()
  {
    // setMoney(0)
    setState(false);
    alert("your profit is"+(money-amount))
    setAmount(0);
    setMoney(0)
  }
  return (
    <>
      <div>
        <div>
          <h1>{money}</h1>
        </div>
        <div className="div-style">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button className="buttonstyle" onClick={() => setMoney(amount)}>
            Add
          </button>
          <button className="buttonstyle" onClick={backfromgame}>
            Back
          </button>
        </div>
        <div className="parent-div">
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
        </div>
        <div className="parent-div">
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
        </div>
        <div className="parent-div">
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
        </div>
        <div className="parent-div">
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
        </div>
        <div className="parent-div">
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
          <div
            onClick={state ? minesplay : newfunction}
            className="div-designing"
          ></div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
