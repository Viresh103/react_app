import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import App1 from './component/App1';
import App2 from './component/App2';
import reportWebVitals from './reportWebVitals';
// import {Route} from 'react-router-dom/Route';
import {BrowserRouter,Route} from 'react-router-dom';

class Application1 extends React.Component{
  render(){
    return(
    <div>
      <App/>
      <App1/>
    </div>
    )
  }
}

class Application2 extends React.Component{
    render(){
        return(
          <div>
            <App/>
            <App2/>
          </div>
           
        )
     }
     
}
function Home(){
  console.log('home');
  return (
    <div>
      <ul>
        <li><a href="/screen1">screen1</a></li>
        <li><a href="/screen2">screen2</a></li>
        </ul>
      
    </div>
  
  )
}

function Application(){
  console.log('its working')
  return (
    <BrowserRouter>
     
        <Route exact path="/" ><Home/></Route>
        <Route exact path="/screen1"><Application1/></Route>
        <Route exact path="/screen2"><Application2/></Route>
      
     
    </BrowserRouter>
  );
}
ReactDOM.render((
  <Application/>
), document.getElementById('root'));

// if(state==="/"){
//   ReactDOM.render(
//     <Application/>,
//      document.getElementById('root')
//   );
// }else{
//   ReactDOM.render(
//     <Application1/>,
//      document.getElementById('root')
//   );
// }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
