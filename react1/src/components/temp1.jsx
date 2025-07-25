import React,{useState} from "react"
function Temp(props){
    const [name,SetName]= useState("Gay");
    const[name1,SetName1]=useState("Bhargav")
   
    
    const[click,setClick]=useState(false)

    

    const handleEvent=()=>{

        if(!click){
            SetName("Bhargav");
            SetName1("Gay")
          
            setClick(true)

        }
        else{
            setClick(false)
            SetName("Gay")
            SetName1("Bhargav")
          
        }
    }


    return<>
    <h1>{name}</h1>
    <h2>{name1}</h2>

    
    <button type="button" onClick={handleEvent}>Change</button>
    </>
}


export default Temp;
