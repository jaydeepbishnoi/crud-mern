import React, {useState}from 'react';
import Table from './Table';
export default function Form() {
    let mycss = {
        width: "50%",
        margin: "auto",
        border: "1px solid",
        borderRadius: "20px",
        padding: "2vw 1vw",
        lineHeight:"2px"
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [post, setPost] = useState('');
    const [address, setAddress] = useState('');

    async function submithandler(e){
        e.preventDefault();
        
        let result = await fetch("http://localhost:4000/myapi",{
            method: "POST",
            body: JSON.stringify({
                name, email, mobile, post, address
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        
        result = await result.json();

        let n = document.getElementById('name').value;
        let o = document.getElementById('email').value;
        let p = document.getElementById('mobile').value;
        let q = document.getElementById('post').value;
        let r = document.getElementById('address').value;
        console.log(n);

         if(n){
            n="";
            o="";
            p="";
            q="";
            r="";
          document.getElementById("name").value=n;          
          document.getElementById("email").value=o;          
          document.getElementById("mobile").value=p;          
          document.getElementById("post").value=q;          
          document.getElementById("address").value=r;          
         }
    
    }
    return (
        <div>
            <form style={mycss} onSubmit={submithandler}>
                <h1>Contact List</h1><br/>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label" style={{float:"left"}}>Name:-</label>
                    <input type="text" className="form-control" id='name' aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{float:"left"}}>Email:-</label>
                    <input type="email" className="form-control" id='email' aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{float:"left"}}>Mobile No:-</label>
                    <input type="text" className="form-control" id='mobile' onChange={(e)=>{setMobile(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{float:"left"}}>Post:-</label>
                    <input type="text" className="form-control" id='post' onChange={(e)=>{setPost(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{float:"left"}}>Address:-</label>
                    <input type="text" className="form-control" id='address' onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{width:"100%"}}>Submit</button>
            </form>
        </div>
    )
}
