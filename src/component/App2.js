import React from 'react';
import "./App2.css";


function Box(props){
    return (
        <div className="comment_box">
             <div  id="photo"></div>
             <div id="comment_name"><strong>{props.who}</strong></div>
             <div id="time">{props.time}</div>
             <div id="comment">{props.comment}</div>
        </div>
    )
}

class App2 extends React.Component{
    constructor(){
      super();
      this.state={
        item:[{who:"teacher",comment:"its holiday today",time:"00:00:00 AM"},],
      }
      this.handlers=this.handlers.bind(this);
    }

    handlers=(event)=>{
        var d=new Date();
        var n = d.toLocaleTimeString();
        if(this.comment.value!==""){
              var new_item={who:this.who.value,comment:this.comment.value,time:n};
        }
        console.log(new_item);
        this.setState((prevstate)=> {
            return {
                item:[...prevstate.item,new_item]
            }
        })
        event.preventDefault();
        console.log(this.state.item);
        this.who.value="";
        this.comment.value="";
    }

    refresh(){
      document.getElementById("myform").reset();
    }
    render(){
        // console.log(this.state.list);
       return(
           <div id="comment_container">
             <div id="form1">
                <form id="myform" onSubmit={this.handlers}>
                    <input id="in1" type="text" placeholder="type your name" ref={(who)=> this.who=who}/>
                    <textarea id="in2" type="text" placeholder="type your comment" ref={(comment)=>this.comment=comment}/>
                    <div id="share_space">
                        <button type="reset"  id="resetbtn">cancel</button>
                        <button id="btn1" type="submit">share </button>
                    </div>
                    
                </form>
              </div>
              <div id="comment_line">
                 {this.state.item.map((val)=><Box who={val.who} comment={val.comment} time={val.time}/>)}
              </div>
              
              {/* <Box who="teacher" comment="taking class"></Box> */}

           </div>
          
       )
    }
    
}

export default App2;