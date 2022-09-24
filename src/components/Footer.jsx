import React from "react"

const year=new Date().getFullYear()

export default function Footer(){
    return(
        <div className="footer">
        <p> copyright ©  {year}</p>
        </div>
    )
}