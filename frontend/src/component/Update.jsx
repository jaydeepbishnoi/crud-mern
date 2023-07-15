import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Update() {
    let mycss = {
        width: "50%",
        margin: "auto",
        border: "1px solid",
        borderRadius: "20px",
        padding: "2vw 1vw",
        lineHeight: "2px"
    }
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [post, setPost] = useState('');
    const [address, setAddress] = useState('');
    // const [userId, setUserId] = useState('');
    const params = useParams();
    useEffect(() => {
        getproduct();
    }, []);
    let getproduct = async () => {
        let result = await fetch(`http://localhost:4000/update/${params._id}`)
        result = await result.json();
        console.log(result)
        setName(result.name);
        setEmail(result.email);
        setMobile(result.mobile);
        setPost(result.post);
        setAddress(result.address);
    }
    let Update = async (e) => {

        e.preventDefault();
        let result = await fetch(`http://localhost:4000/update/${params._id}`, {
            method: "PUT",
            body: JSON.stringify({
                name, email, mobile, post, address
            }),
            headers:{'Content-type': 'application/json; charset=utf-8'}
        })
        console.log(result)
        result = await result.json();
        navigate("/")
    }
    return (
        <div>
            <form style={mycss} onSubmit={Update}>
                <h1>Update Product</h1><br />
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label" style={{ float: "left" }}>Name:-</label>
                    <input type="text" className="form-control" id='name' aria-describedby="emailHelp" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{ float: "left" }}>Email:-</label>
                    <input type="email" className="form-control" id='email' aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{ float: "left" }}>Mobile No:-</label>
                    <input type="text" className="form-control" id='mobile' value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{ float: "left" }}>Post:-</label>
                    <input type="text" className="form-control" id='post' value={post} onChange={(e) => { setPost(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMobile" className="form-label" style={{ float: "left" }}>Address:-</label>
                    <input type="text" className="form-control" id='address' value={address} onChange={(e) => { setAddress(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }} >Update</button>
            </form>
        </div>
    )
}
export default Update;