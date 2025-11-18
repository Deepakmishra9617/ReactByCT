import { useState } from "react";
const Toggle = () => {
    const [dark, setDark] =useState(false);
    let Styles ={
    ScreenStyle:{
        backgroundColor: dark ? "black" : "white",
        height:"100vh",
        textAlign: "center",
    },
 heading:{
            color:"red",
            textShadow:"2px 2px 4px #000000"
        },
            btnStyle:{
                backgroundColor: dark ? "grey" : "yellow",
                color:"white",
                padding:"7px",
                fontSize:"20px",
                borderRadius:"5px",
                border:"none",
                cursor:"pointer",
            
            }
    }
   
    const toggleTheme = () => {
        setDark(!dark);
    }
    return (
        <div style={Styles.ScreenStyle}>
            <h2 style={Styles.heading}>Toggle Theme</h2>
            <button onClick={toggleTheme}style={Styles.btnStyle}>{dark ? "Light Mode" : "Dark Mode"}</button>
            </div>
            )
        };

export default Toggle;