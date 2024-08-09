import React, { useState, useEffect, useRef } from "react";
import styles from "./Dpg.module.css";
import { MdLock } from "react-icons/md";
import bgImg from "../../assets/mainPgImg.png";
import LeftBody from "../../components/LeftBody";
import PopUp from '../../components/PopUp'
import { nanoid } from 'nanoid'
import RightDetails from "../../components/RightDetails";
const DmainPg = () => {
  const [popUp, setpopUp] = useState(false);
  const [rightDetails,setRightDetails]=useState()
  const [notes,setNotes]= useState(localStorage.getItem('Notes')?JSON.parse(localStorage.getItem('Notes')):[])
  const [selectedKey,setKey]=useState()
  const [isMobile,setMobile]=useState(false)
  const [mobileToggle,setMobileToggle]=useState(false)

 
  let menuRef = useRef();
  useEffect(() => {
    const handleouterClick = (e) => {
      if (menuRef.current == e.target) {
        setpopUp(false);
      }
    };
    addEventListener("mousedown", handleouterClick);
    return () => {
      removeEventListener("mousedown", handleouterClick);
    };
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHead}>
            <h1>Pockect Notes</h1>
          </div>
          <LeftBody notes={notes} selectedKey={selectedKey} setRightDetails={setRightDetails} setKey={setKey} setMobile={setMobile} setMobileToggle={setMobileToggle} />
          <div
            className={styles.addBtn}
            onClick={() => {
              setpopUp(true);
            }}>
            +
          </div>
        </div>
     
        {rightDetails?<RightDetails rightDetails={rightDetails} selectedKey={selectedKey} setRightDetails={setRightDetails} isMobile={isMobile} mobileToggle={mobileToggle} setMobileToggle={setMobileToggle} />:!isMobile?<Right/>:null}
      </div>
      {popUp ? (
        <PopUp menuRef={menuRef} notes={notes} setNotes={setNotes}  setpopUp={setpopUp} />
      ) : (
        <></>
      )}
    </>
  );
};




 export const Right=()=>{
  return (
    <div className={styles.right}>
    <div className={styles.rightBody}>
      <img src={bgImg} alt="background image of working peoples" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
    <div className={styles.rightFooter}>
      <MdLock size={"2rem"} />
      <h2>end-to-end encrypted</h2>
    </div>
  </div>
  )
}


export default DmainPg;
