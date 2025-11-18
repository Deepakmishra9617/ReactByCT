import { useState}  from "react"; 
const Password =() => {
let styles={
    heading:{
        color :"blue",
        // margin:"auto",
        boxShadow:"2px 2px 4px #000000",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    box:{
        display:"flex",
        height:"500px",
        width:"500px",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        border:"2px solid red",
        margin:"auto",

    }
}
    const[hide,setHide] = useState (false);
const TogglePassword=() => {
 setHide(!hide);
}
return (
    <div style={styles.box}>
        <h1 style={styles.heading}> Password</h1>
        <input type={hide? "text" : "Password" } placeholder="Enter Password" />    
        <button onClick={TogglePassword}>{hide ? "Hide":"Show"}</button>    
            </div>
)
}
export default Password;
