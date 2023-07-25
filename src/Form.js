import React,{useState} from "react";
var c=0;
 function Form()
 {
    const[name,setName]=useState("");
    const[father,setFather]=useState("");
    const[mobile,setMobile]=useState();
    const[gender,setGender]=useState("");
    const[qualification,setQualification]=useState([]);
    const[info,setInfo]=useState([]);


    function fn()
    {
      alert(mobile);
      setInfo([...info,{
        id:c++,
        name:name,
        father:father,
        mobile:mobile,
        gender:gender,
        qualification:qualification,
      }])
      alert(name);
      setName('');
      alert(name);
    }
    function fn1(e)
    {
      setQualification([...qualification,e.target.value]);
    }
    function reverse()
    {
      const rev=[...info];
      rev.reverse();
      setInfo(rev);
    }
  return(
    <>
    <center>
      <div >
      <h1>REGISTRATION FORM</h1>
      <br>
      </br>
      <br>
      </br>
      <label >NAME</label>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <br></br>
      <br>
      </br>
      <label>FATHER NAME</label>
      <input type="text" onChange={(e)=>setFather(e.target.value)}></input>
      <br/>
      <br/>
      <label>MOBILE NUMBER</label>
      <input type="text" onChange={(e)=>setMobile(e.target.value)}></input>
      <br></br>
      <br></br>
      <label>GENDER        </label>
      <input type="radio" name="g" value="M" onChange={(e)=>setGender(e.target.value)}></input>  M
      <input type="radio" name="g" value="F" onChange={(e)=>setGender(e.target.value)}></input>  F
      <br/>
      <br/>
      <label>QUALIFICATION</label>
      <input type="checkbox" value="MATRIC" onChange={fn1}/>MATRIC
      <input type="checkbox" value="INTERMEDIATE" onChange={fn1}/>INTERMEDIATE
      <input type="checkbox" value="GRADUATION" onChange={fn1}/>GRADUATION
      <br/>
      <br/>
      <button type="button" onClick={fn}>SUBMIT</button>
      <button type="button" onClick={reverse}>REVERSE</button>
</div>
<ul>
  {
    info.map(a=>(
      <li key={a.id}>
        <li>NAME IS : {a.name}</li>
        <li>FATHER NAME IS : {a.father}</li>
        <li>MOBILE NUMBER : {a.mobile}</li>
        <li>GENDER IS : {a.gender}</li>
        <li>QUALIFICATION IS : {a.qualification}</li>
        <button onClick={()=>{
          setInfo(info.filter(a1=>a1.id!==a.id));
        }}>DELETE</button>
      </li>
    )
      )
  }
</ul>
    </center>
    </>
  );
 }

 export default Form