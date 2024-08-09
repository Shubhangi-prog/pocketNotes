import { nanoid } from 'nanoid'
import styles from './leftBody.module.css'
import { useEffect, useState } from 'react';

export default function LeftBody({notes,setRightDetails,setKey,selectedKey,setMobile,setMobileToggle}){
  const [innerSize,setSize]=useState()
  useEffect(()=>{
   const handleResize=()=>{
      setSize(window.innerWidth)
    }
    addEventListener('resize',handleResize)
    handleResize();
    return removeEventListener('resize',handleResize);
  },[])



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
    function showRight(e,note){
      setKey(Object.keys(note)[0])
      setRightDetails(note)
      if(innerSize<=500){
        setMobile(true)
        setMobileToggle(false)
      }

    }

    return(
      <div className={styles.leftBody}>

        {notes?notes.map((note)=>{ 
         
            let key = Object.keys(note);
           
            let shortForm = toShort(key[0].split(" "));
            return (  <div key={nanoid()} id={Object.keys(note)[0]} style={{backgroundColor:`${key[0]==selectedKey?'#2f2f2f1a':null}`}}   className={styles.notesSec} onClick={(e)=>{showRight(e,note)}} >
                <div style={{backgroundColor:note[key].color}} className={styles.NotesDp}>
                  <h1>{shortForm}</h1>
                </div>
                <h3 className={styles.NotesName}>{key}</h3>
              </div>)
         }):null}                                                      
    </div>
    )
  }