import "./noti_box.css"
let noti_all=[
{name:"student1", note:"ahsineidn"},
{name:"student2",note:"aknskdan"},
{name:"teacher1",note:"akjbsdbsdbs"},
{name:"teacher2",note:"akjdbsdasjk"},
{name:"student3", note:"shsdiebehd"},
{name:"teacher3",note:"akjasdjasu"},
];
function Box(props){
    return(
        <div className="box" >
            <div id="icon"></div>
            <div id="name"><strong>{props.name}</strong></div>
            <div id="note">{props.note}</div>
        </div>
    
    )
}

function Box_container(){
    let all_notes=[];
    for(let i=0;i<6;i++){
        all_notes.push(<Box name={noti_all[i].name} note={noti_all[i].note}/>);
    }
//    console.log(all_notes);
   return all_notes;
}
export default Box_container;