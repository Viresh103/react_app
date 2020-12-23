import "./notepad.css";
import react from 'react';

function Box(props){
    return(
        <div className="box1">
            <pre><strong>{props.name}:  </strong>{props.note}</pre>
        </div>
    
    )
}


class Notepad extends react.Component{
    constructor(){
        super();
        this.state={
            item:[{title:"name",note:"note"},],
            intext:false,
        }
        this.change_handler=this.change_handler.bind(this);
        this.change_handler1=this.change_handler1.bind(this);
        this.handler=this.handler.bind(this);
        this.btnhandler=this.btnhandler.bind(this);
        this.tmp_title="";
        this.tmp_note="";
    }
   
    handler=()=>{
        let title=this.tmp_title;
        let note=this.tmp_note;
        // console.log({title,note});
        if(title!==""){
            this.setState((prevstate)=>{
                return{
                  item:[...prevstate.item,{title:title,note:note}],
                  intext:!(prevstate.intext),
               }
            })
        }
        console.log(this.state.item);
        this.tmp_title="";
        this.tmp_note="";
        // this.list.push({name:title,note:note});
        // this.state.intext=!(this.state.intext);
    
    }


    change_handler(event){
           this.tmp_title=event.target.value;
    }

    change_handler1(event){
        this.tmp_note=event.target.value;
    }

    btnhandler(){
        this.setState({intext:true});
    }
    render(){
        // console.log(this.tmp_title);
        if(this.state.intext){
           return(
               <div id="notepad_input">
                   <div id="notepad_title">Notepad</div>
                   <div id="form">
                        <form  onSubmit={this.handler}>
                            <input  id="text_input" type="text" placeholder="note title" onChange={this.change_handler}/>
                            <input  id="text_input" type="text" placeholder="note" onChange={this.change_handler1}/>
                            <button id="submit_btn" type="submit" >ADD</button>
                        </form>
                   </div>
                   
               </div>
           )
        }else{
            return (
                 <div id="notepad_display">
                     <div id="notepad_title">Notepad</div>
                     <div id="disp_s">
                        {this.state.item.map((val)=> <Box name={val.title} note={val.note}/>
                        )}
                    </div>
                    <button id="btn" onClick={this.btnhandler}>+</button>
                 </div>
                 

            )


        }
    }

}
export default Notepad;