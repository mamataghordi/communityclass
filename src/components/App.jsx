import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
// import notes from "../notes"
import CreateArea from "./CreateArea"



export default function App(){
    return (
        <>
        <Header />
     <CreateArea/>
        <Footer/>
       <Note
       key={1} title="Note title" content="Note Content"
       />
       {/* <notes/> */}
        </>
    )
}