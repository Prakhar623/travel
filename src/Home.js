import React, { useState,useEffect, Component } from 'react'

import "./home.css"
import axios from 'axios';
import img from "./image 1.png"

function Home() { 
const [data,setdata]=useState([]);
const [title,settitle]=useState("3");
const [tile,settile]=useState("near");

 const  y= new Date().getTime();

let til=null

useEffect(() => {
  
  axios.get("https://assessment.api.vweb.app/rides").then((response)=>
 
setdata(response.data))
console.log(data);

}, [title]);
const yo=()=>{
 settile("near")
 
 
}
const yo1=()=>{
  settile("next")
 }
 const yo2=()=>{
  settile("ast")
 }
const Row=({map_url,id,origin_station_code,station_path,destination_station_code,date,state,city,title
})=>{

  const s=station_path?.map((x)=>{
    return x+","
  }
    )

return(<><div className='rows'>
 <div className="row_image">
 <img src={img}alt={map_url}/></div >
<div className="rowdetails">
<h1 >Ride id:{id}</h1>
<h1>origin station :{origin_station_code} </h1>
<h1>station_path :{s} </h1>
<h1>Date:{date}</h1>
<h1>Distance:{Math.floor(Math.random() * 3)} </h1>
<h1 >City:{city}</h1>
<h1 >state:{state}</h1>

</div> 
</div>
<br></br>
    </>)
}
const Row1=({map_url,id,origin_station_code,station_path,destination_station_code,date,state,city,title
})=>{

  const st=station_path?.map((a)=>{
    return a+","
  }
    )
  return(<><div className='rows'>
 
<div className="row_image">
<img src={img}alt={map_url}/></div >
<div className="rowdetails">
<h1 >Ride id:{id}</h1>
<h1>origin station :{origin_station_code} </h1>
<h1>station_path :{st} </h1>
<h1>Date:{date}</h1>
<h1>Distance:{Math.floor(Math.random() * 3)} </h1>

<h1 >state:{state}</h1>

</div> 
</div>
<br></br>
  


</>)}
const Row2=({map_url,id,origin_station_code,station_path,destination_station_code,date,state,city,title
})=>
{

const st=station_path.map((a)=>{
  return a+","
}
  )

  
  return(<><div className='rows'>
 
<div className="row_image">
<img src={img}alt={map_url}/></div >
<div className="rowdetails">
<h1 >Ride id:{id}</h1>
<h1>origin station :{origin_station_code} </h1>
<h1>station_path :{st} </h1>
<h1>Date:{date}</h1>
<h1>Distance:{ Math.floor(Math.random() * 3)} </h1>

<h1 >state:{state}</h1>
<h1 >city:{city}</h1>

</div> 
</div>
<br></br>
  


</>)}
return (
    
  
    <div className='hm'>
      
      
     
        <button type="button" className="btn btn-secondary btn-lg"onClick={yo}>Nearest Rides</button>
        <button type="button" className="btn btn-secondary btn-lg"onClick={yo1}>Upcoming Rides</button>
        <button type="button" className="btn btn-secondary btn-lg"onClick={yo2}> Past Rides</button>
        
        {
        
          data.map((element)=>{
            
            if(tile==="past")

        {
           
        const element1=data.filter((e)=>{return new Date(e.date).getUTCDate()< new Date().getUTCDate()})
        console.log(element1);
         
    return(  
      <Row title="1" key ={element1.id}{...element1}></Row>)}
      if(tile==="next")
      { const element2=data.filter((e)=>{return new Date(e.date).getUTCDate()> new Date().getUTCDate()})
        return(  
          
          <Row1 title="2" key ={element2.id}{...element2}></Row1>)}
          if(tile==="near")
          return(  
            <Row2 title="3" key ={element.id}{...element}></Row2>)
      })}
     
 </div>


  );
}




export default Home