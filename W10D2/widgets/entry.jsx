import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';


let panes = [
  {title: "wash car", content: "wednesday"}, 
  {title: "clean room", content: "never"}, 
  {title: "do homework", content: "someday"}
]

const Root = () => {
  return (
    <div>
      <Clock />
      <Tabs panes={panes} />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
