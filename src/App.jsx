import React from "react";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <input type="text" className="h-10 w-96 outline-none border border-slate-800 rounded-lg px-5"></input>
      <div>
        <button className="h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none">+</button>
        <input type="text"/>
        <button className="h-10 px-5 text-xl font-bold bg-slate-700 text-slate-200 rounded-lg outline-none">-</button>
      </div>
    </div>
  );
}
export default App;