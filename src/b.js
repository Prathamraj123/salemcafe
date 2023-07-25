import React,{useState} from 'react';
function B()
{
    const [name,setName]=useState("");
const[desc,setDesc]=useState("");
const[price,setPrice]=useState();
const[image,setImage]=useState(null);
const[item,setItem]=useState([]);

function handleimage(e)
{
    const file=e.target.files[0];
    const reader=URL.createObjectURL(file);
    setImage(reader);

}
const autoname=["Maggii","Pasta","Chips","Kurkure","Chocolate"];
const autodesc=["a","b","c","d","e","f","g"];
function f()
{
    if(name=="Maggii" && desc=="a")
    setPrice(45);
    const duplicate=item.find((i)=>i.name===name);
    const duplicate1=item.find((j)=>j.desc===desc);
    if(name==="" || desc=="" || price=="" || image==null)
    alert("PLEASE ENTER DETAILS");
    
    else if(duplicate || duplicate1)
    alert("ITEM EXISTS");
    
    else
    {
    setItem([...item,{name:name,
        desc:desc,
        price:price,
        image:image
    }])
    setName("");
    setDesc("");
    setImage(null);
    setPrice("");
}

}

const mystyle ={
    width:"100px",
    height:"180px",
    margin:"0.1cm"
}
function remove(inf)
{
    const updatedItems=item.filter((i)=>i!==inf);
    setItem(updatedItems);
}
return (
<>
<center>
<h1>CART</h1>
<label>Product name</label>
<input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value) }  list='g'/>
<label>Product description</label>
 <input type="text" value={desc}  list="m" placeholder="Enter product desc" onChange={(e)=>setDesc(e.target.value)}></input>
 <br/>
 <br/>
<datalist id="g">
    {
        autoname.map((iy,index)=>(
            <option key={index} value={iy}></option>
        ))
    }
    
</datalist>
<datalist id="m">
{autodesc.map((jh,kh)=>(
        <option key={kh} value={jh}></option>
    ))}

</datalist>
 <label>Product price</label>
 <input type="number" value={price} placeholder="Enter product price" onChange={(e)=>setPrice(e.target.value)}></input>
 <label>Choose Image</label>
 <input type="file" onChange={handleimage}></input>
<br/>
<br/>
<button onClick={f}>SUBMIT</button>

<div>{
    item.map((inf,index)=>(
<p key={index}><img src={inf.image} style={mystyle} alt={inf.name}></img><br/>
{inf.name}<br/>

{inf.desc}<br/>
{inf.price}<br/>
<button onClick={()=>{
    remove(inf)
}}>REMOVE</button>

</p>
    ))}
    
</div>

</center>
</>
);
}
export default B;