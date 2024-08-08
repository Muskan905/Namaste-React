import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//  nested html structure using react

//  <div id="parent">
//     <div id="child">
//         <h1>I'm an h1 tag</h1>
//         <h2>I'm an h2 tag</h2>
//     </div>
//     <div id="child">
//          <h1>I'm an h1 tag</h1>
//          <h2>I'm an h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "This is Namaste React🚀"), React.createElement("h2", {}, "I'm an h2 tag")]),
    React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")])]);
    
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);