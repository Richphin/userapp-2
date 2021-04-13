import React from "react";
import UserItem from "./useritem";

function Userlist(props) {
    
    return(
        <div>
            {props.allUsers.map((user) => (<UserItem user={user}/>))}   
        </div>
    );
    }
    export default Userlist;