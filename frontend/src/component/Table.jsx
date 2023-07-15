import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
// import Update from './Update';
export default function Table() {

    const [product, setproduct] = useState([]);

    let getproduct = async (e) => {
        let result = await fetch("http://localhost:4000/myapi");
        result = await result.json();
        setproduct(result);
    }
    useEffect(()=>{
        getproduct();
    },[product]);

    let deletedata = async(id)=>{
        let result = await fetch(`http://localhost:4000/myapi/${id}`,{
            method:"DELETE"
        });
        result = await result.json();
        getproduct();
    }
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Post</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {product.length > 0 ? product.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.mobile}</td>
                                <td>{value.address}</td>
                                <td>{value.post}</td>
                                <td><button className="btn btn-primary" onClick={()=>{deletedata(value._id)}}>Delete</button></td>
        <td><NavLink className="btn btn-primary" to={`/update/${value._id}`} >update</NavLink></td>
                            </tr>
                        )
                    })
                        : <tr>
                            <td colSpan={6} className="text-center p-2">No Product Found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
