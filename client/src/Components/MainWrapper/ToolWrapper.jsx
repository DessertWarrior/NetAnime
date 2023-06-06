import 'animate.css';
import { useState } from 'react';
import {Link,useNavigate } from 'react-router-dom'
import {deleteData} from "../../Functions/fetchData.js";

function ToolWrapper(props)
{
    const nav = useNavigate();
    const handleChange = (event)=>{
        props.searchValue(event.target.value)
    }
    const deletePost = async () => {
        if (!props.card.id) return null;    //if no target, return nothing
        const data = await deleteData(props.card);
        if (data) {
          nav('/')
        } else {
            props.setShowAlert(true);
            props.setAuth(false);
            const modal = document.getElementById('loginModal')
            if (modal) {    //if the component exist.
                const bootstrapModal = new window.bootstrap.Modal(modal);   //creating a new instance of Modal class
                bootstrapModal.show();
            }
        }
      };
    return (
        <>
        <nav className="tool-wrapper d-flex column-gap-4">
            <Link to='/new'><i className="fa fa-plus" aria-hidden="true" ></i></Link>
            <i className="fa fa-trash" aria-hidden="true" onClick={deletePost}></i>
            <i className="fa fa-search" data-bs-toggle="collapse"  data-bs-target="#searchBar" aria-expanded="false" aria-controls="searchBar"></i>
            <div className="collapse collapse-horizontal" aria-expanded="false" data-bs-toggle="collapse" id="searchBar">
                <input type="search" placeholder="search..." onChange={handleChange}></input>
            </div>
            
            {props.auth
            ?<img className="rounded-circle" src='https://e1.pxfuel.com/desktop-wallpaper/968/45/desktop-wallpaper-yui-hirasawa-k-yui-hirasawa-icon.jpg' style={{blockSize:'50px'}}/>
            :<button className="btn btn-outline-danger me-5" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>}
        
         
        </nav>
        
        </>
        
    );
}
export default ToolWrapper;