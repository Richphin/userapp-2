import React,{ useState } from "react";


function Userform(props) {

    const[state,userstate]=useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Country:"",
        Password:"",
    })

    function handleonChange(event) {
        userstate({
            ...state,
            [event.target.name]:event.target.value,
        })
    }

    function handleonSubmit() {
        props.adduser(state);
    }

    return(
        <div >
            <div className="row" className="form">
                    <label className="formlabel">Firstname</label><span className="required">*</span><br/>
                    <input type="text" name="Firstname" value={state.Firstname} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label className="formlabel">Lastname</label><span className="required">*</span><br/>
                    <input type="text" name="Lastname" value={state.Lastname} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Email</label><span className="required">*</span><br/>
                    <input type="Email" name="Email" value={state.Email} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Country</label><br/>
                    <input type="text" name="Country" value={state.Country} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Password</label><span className="required">*</span><br/>
                    <input type="Password" name="Password" value={state.Password} className="inputfield" onChange={handleonChange}/>
            </div><br/>
            <div className="row" className="form">
                <button type="Submit" className="createbtn" onClick={handleonSubmit}>Create User</button>
                 
            </div>
        </div>
    )
}
export default Userform;