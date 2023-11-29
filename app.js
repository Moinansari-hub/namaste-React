const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//  <div id="parent">
//   <div id="child">
//   <h1>Hi i'm h1</h1>
//   <h2>Hi i'm h2</h2>
//  </div>
//   </div>
//         <div id="parent">
//        <div id="child">
//     <h1>Hi i'm h1</h1>
//      <h2>Hi i'm h2</h2>
//     </div>
//      </div>
 const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hi i'm h1"),
        React.createElement("h2",{},"Hi i'm h2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hi i'm h1"),
        React.createElement("h2",{},"Hi i'm h2")
    ])
 ]);
 const rooot = ReactDOM.createRoot(document.getElementById("root"));
 rooot.render(parent);
