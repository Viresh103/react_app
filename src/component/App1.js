import './App1.css';
import Boxcontainer from './noti_box.js'
import Notepad from './notepad.js'
function App1() {
  return (
    <div className="app1">
      <div className="search">
         <div id="search_icon"><img  src="" alt=""></img></div>
          <div id="search_text">search</div>
      </div>
      <div className="graph_container">
          <div className="graph_box" >
            <div id="title">Sales Report September 2020</div>
            <div id="graph"><img id="graph_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULm-3ecLqBfFNcYrgHrFjFbmgafpzuceglA&usqp=CAU" alt=""/></div>
          </div>
          <div className="details">
                <div id="date">17 Sep</div>
                <div id="revenue_box">
                    $1,204.33
                    Revenue
                </div>
                <div id="Quat_box">
                    33
                    Quatation
                </div> 
          </div>
      </div>
      <div id="notification">Notification</div>
      <div id="event">Event</div>
      <div id="notification_box">
          <Boxcontainer></Boxcontainer>
      </div>
      <Notepad/>
      <div id="image_box"></div>
      <div id="image_box1">
         <pre>    this month     </pre>
          +7.8%
      </div>
      <div id="image_box2">
         <pre>    last month     </pre>
          +67.4%
      </div>
      <div id="inbox"><pre>inbox           <span>26</span></pre></div>
    </div>
  );
}

export default App1;
