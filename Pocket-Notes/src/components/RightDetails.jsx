import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './RightDetails.module.css'
import { nanoid } from 'nanoid';
import { IoSendSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
const RightDetails = ({rightDetails,selectedKey,setRightDetails,isMobile,mobileToggle,setMobileToggle}) => {
    const [innerText,setText]=useState('')
    let key = Object.keys(rightDetails);
    let data=rightDetails[key].details
    console.log(rightDetails[Object.keys(rightDetails)].details,'is right detials')
  
   function checktext(e){
       setText(e.target.value)
   }

   function AddText(){
       let addText=JSON.parse(localStorage.getItem('Notes'));
        console.log(addText)
      addText.map((data)=>{console.log(Object.keys(data).map((key)=>{
        if(key==selectedKey){ 
          let month = new Date().toLocaleDateString('en-us', {month:"long"});
          let date = new Date().toLocaleDateString('en-us', { day:"numeric"});
          let year = new Date()
          data[key].details.push({text:innerText,date:`${date} ${month.slice(0,3)} ${year.getFullYear()}`,time:`${year.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`})
           rightDetails[Object.keys(rightDetails)].details.push({text:innerText,date:`${date} ${month.slice(0,3)} ${year.getFullYear()}`,time:`${year.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`})
           let newRight={...rightDetails}
          console.log(newRight,'new right details after check')
          setRightDetails(newRight)
          console.log(addText)
          localStorage.setItem('Notes',JSON.stringify(addText))
          setText('')
        }
      })) })
     
   }

   useEffect(()=>{console.log(innerText) })
    function toShort (key){
        if(Object.keys(key).length==1){
             let letter = key[0];    
             let capWord =letter.charAt(letter.slice(0,1)).toUpperCase();  
             return capWord;
           }else{
             let letter1 = key[0];    
             let letter2 = key[1];    
             let capWord = letter1.charAt(letter1.slice(0,1)).toUpperCase()+letter2.charAt(letter1.slice(0,1)).toUpperCase();
             return capWord;
         }
        }
       
    
       let shortForm = toShort(key[0].split(" "));
    //   console.log(rightDetails[key].details[0].date)
      console.log(rightDetails,'from right')


  return (
    <div className={styles.container} style={{display:`${!mobileToggle?"flex":"none"}`}} >
            <div className={styles.nav} >
               {isMobile?<IoMdArrowRoundBack  size={"3rem"} style={{cursor:"pointer",fill:"#ffffff"}} onClick={()=>{setMobileToggle(true)}} />:null} 
                <div style={{backgroundColor:rightDetails[key].color}} className={styles.NotesDp}>
                  <h1>{shortForm}</h1>
                </div>
                <h3 className={styles.NotesName}>{key}</h3>
                </div>
            <div className={styles.noteArea} >
                {rightDetails[Object.keys(rightDetails)].details.map((data)=>{
                    return(<div key={nanoid()} className={styles.notesContainer}>
                              <div className={styles.notesText}>{data.text}</div>
                              <div className={styles.notesDateTime}>{data.date}<svg width="0.8rem" height="0.8rem" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" fill="#353535"/>
</svg>
{data.time}</div> 
                        </div>)
                })}
                
            </div>
            <div className={styles.TextArea} >
              <textarea name="UserNotes" id="TextNotes" value={innerText} placeholder='Enter your text here...........'  onChange={checktext}  rows="8"></textarea>
             
            </div> 
           {innerText.trim(" ").length==0? <IoSendSharp size={"2rem"} className={styles.SendBtn} fill="#ABABAB"  />:<IoSendSharp size={"2rem"} className={styles.SendBtn} fill="#001F8B" onClick={AddText} />}
    </div>
  )
}

export default RightDetails