import { useState } from "react";

function App() {
  let [color, setColor] = useState("lime");

  return (
    <>
      <div
        className="w-screen h-screen duration-200 flex  items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="p-3 bg-white rounded-full fixed flex flex-wrap justify-center bottom-12">
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>Grey</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
          <button className="rounded-3xl p-2 mr-3" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>
          <button className="rounded-3xl p-2" style={{ backgroundColor: "lime" }} onClick={() => setColor("lime")}>Lime</button>
        </div>
      </div>
    </>
  );
}

export default App;
