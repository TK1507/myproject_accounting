import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import HelloComponent from './components/HelloComponent';
import reportWebVitals from './reportWebVitals';
//function component
// function HelloCompomemt(){
//   return <h1>Hello first Component</h1>
// }

// ReactDOM.render(<HelloCompomemt/>,document.getElementById('root'));


//class 
// class HelloComponent2 extends React.Component{
//   render()
//   {
//     return <h1> Hello First</h1>
//   }
// }
// ReactDOM.render(<HelloCompomemt/>,document.getElementById('root'));



//og
//App แทน HelloComponent
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
