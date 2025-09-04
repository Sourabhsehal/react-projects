import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("lightblue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#FFDAB9")}
            className="outline-none px-4 py-1 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "#FFDAB9" }}
          >
            peach
          </button>

          <button
            onClick={() => setColor("#CE93D8")}
            className="outline-none px-4 py-1 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "#CE93D8" }}
          >
            lavender
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("lightblue")}
            className="outline-none px-4 py-1 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "lightblue" }}
          >
            Light Blue
          </button>

          <button
            onClick={() => setColor("#7ce890ff")}
            className="outline-none px-4 py-1 rounded-full bg-white shadow-lg"
            style={{ backgroundColor: "#7ce890ff" }}
          >
              Light Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;