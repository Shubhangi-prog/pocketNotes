import React, { useState } from 'react'
import styles from './popUp.module.css'


function PopUp({menuRef,notes,setNotes,setpopUp }) {
        const [error,setError]=useState(false)
        const [text,setText]=useState('')
        const [color,setColor]=useState()
        function Gname(e){
            setText(e.target.value)
            
        }
     
        function  createFnc(text){
            let a = notes.filter((note)=>{return Object.keys(note)==text}).length
            if(a==0){
            if(text.trim(" ")&&color){console.log("text is true")
            let id=notes.length
             let l = {text:{color:color,details:[]}}
             l[text] = l['text'];
             delete l['text'];
             console.log(l,'from function')
            let newNote=[...notes]
            newNote.push(l)
            localStorage.setItem('Notes',JSON.stringify(newNote))
            setNotes(newNote)
            setpopUp(false)
            setError(false)
        }}
        else
        {
            setError(true)
        }
    
        }
  return (
    <div className={styles.popUp} ref={menuRef}>
          <div className={styles.createTab}>
            <div className={styles.tabContainer} >
              <h1>Create New group</h1>
              <div className={styles.Gname}>
                <h2>Group Name</h2> 
                <input type="text" placeholder="Enter group name" onChange={(e)=>{Gname(e)}} />
              </div>
              <div className={styles.ColorSec}>
                <h2>Choose colour</h2>
                <div className={styles.colorOption}>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#B38BFA")}} style={{backgroundColor:"#B38BFA",border:`${color=="#B38BFA"?"2px solid black":"none"}`}} ></div>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#FF79F2")}} style={{backgroundColor:"#FF79F2",border:`${color=="#FF79F2"?"2px solid black":"none"}`}}></div>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#43E6FC")}} style={{backgroundColor:"#43E6FC",border:`${color=="#43E6FC"?"2px solid black":"none"}`}}></div>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#F19576")}} style={{backgroundColor:"#F19576",border:`${color=="#F19576"?"2px solid black":"none"}`}}></div>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#0047FF")}} style={{backgroundColor:"#0047FF",border:`${color=="#0047FF"?"2px solid black":"none"}`}}></div>
                  <div className={styles.colorPalates} onClick={()=>{setColor("#6691FF")}} style={{backgroundColor:"#6691FF",border:`${color=="#6691FF"?"2px solid black":"none"}`}}></div>
                </div>
              </div>
            </div>
            <div className={styles.createBtn} >{error?<h2 style={{color:"red",alignSelf:"center"}} >This name already exsist !</h2>:<>{' '}</> } <button onClick={()=>{createFnc(text)}} >Create</button></div>
           
          </div>
        </div>
  )
}


export default PopUp