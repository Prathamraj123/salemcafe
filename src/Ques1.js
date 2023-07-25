import React,{useState,useEffect} from 'react';

function Ques1()
{
    const [productprice,setProductprice]=useState([{
        id:1,product:"ProductA",price:10},
        {
            id:2,product:"ProductB",price:50
        },
        {
        id:3,product:"ProductC",price:89}]
    )
useEffect(()=>{
    const interval=setInterval(()=>{
        const updatedprices=productprice.map(product=>({
            ...product,price:product.price+Math.floor(Math.random()*10)+1
        }))
        setProductprice(updatedprices);
    },1000);

    return ()=>clearInterval(interval);
},[])

return (
    <>
    <h1>HELLO</h1>
    <div>{

    productprice.map(product=>(
        <div key={product.id}>
                <p>{product.product}</p>
                <p>{product.price}</p>
        </div>
    )
        
        )
            }

    </div>

    </>

)
}
export default Ques1;