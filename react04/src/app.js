import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Chai=(props)=>{
  return React.createElement(
    'div',
    {},
    [
      React.createElement('h2',{},props.name),
      React.createElement('h3',{},props.cost),
    ]
  )
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement('h1',{},'Chai varity'),
      React.createElement(Chai,{name:'Ginger chai',cost:1001}),
      React.createElement(Chai,{name:'Lemon Tea',cost:1001}),
      React.createElement(Chai,{name:'Ice Tea',cost:1001}),
      React.createElement(Chai,{name:'Masala chai',cost:1001})
    ]
  );
};

const container = document.getElementById("root");

const root=ReactDOM.createRoot(container)
root.render(React.createElement(App))

/* 
React.createElement(
  type,        // a string for an HTML tag (e.g. "div", "p") or a React component

  propsObject, // an object containing any attributes/props (e.g. { className: "my-class" }). 
                // Here  it’s `{}` meaning “no props.”

  children…    // zero or more “children” arguments. Each child can be text or another React
                //element.
);
*/

/*
We define a component named app.

    This component, when “instantiated,” returns a <div> containing a <p> that says “hello everyone.”

We grab the DOM node with id="root".

    Think of that as an empty <div> in your HTML where React will insert stuff.

We create a React “root” object with ReactDOM.createRoot(container).

    That prepares React’s rendering machinery in that part of the page.

We tell React to render our component by calling root.render(React.createElement(app)).

    Under the hood, React calls our app function, builds the virtual DOM tree (<div><p>…</p></div>), and mounts it into the real DOM inside <div id="root">.
*/