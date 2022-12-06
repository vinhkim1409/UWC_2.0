import styles from './style.module.css'
import { Link } from 'react-router-dom'
import {Menu, MenuItem, Divider, Button,} from '@mui/material';
import {BsBellFill,BsFillChatFill,BsPersonSquare,BsList} from 'react-icons/bs'
import {RiPlayListAddFill} from 'react-icons/ri'
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import {FaTruck} from 'react-icons/fa'
import {GrUserWorker} from 'react-icons/gr'
import {HiTruck,HiOutlineLocationMarker} from 'react-icons/hi'
import {GiPositionMarker} from 'react-icons/gi'
import { List, PersonCircle , ClipboardPlus, BoxArrowInRight , Heart , Cloud, PencilSquare, BoxArrowLeft} from 'react-bootstrap-icons'

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // menu phan cong
    const [anchorEl1, setAnchorEl1] = useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    return ( 
       <div className={styles.container}>
        <header className={styles.wrapper}>
        <div className = {styles.inner}>
                    <div  className = {styles.logo}>
                        <Link to='/' className={styles.text} style={{ textDecoration: 'none' }}>
                            <div >UWC2.0</div>
                        </Link>
                        
                    </div>
         <div className={styles.phancong}>
         {
               
               // su dung 2 cai handle click
               
                   <RiPlayListAddFill  onClick={handleClick1} 
               onMouseOver={handleClick1} 
                    color="#01AA16" size={40} />
                 
       }
        
        <Menu
                anchorEl={anchorEl1}
                id="account-menu"
                open={open1}
                onClose={handleClose1}
                onClick={handleClose1}
                MenuListProps={{ onMouseLeave: handleClose1 }}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
               <div className={styles.menuAcount}>
                <Link to='/Vehicle' className={styles.text1} style={{ textDecoration: 'none' }}>
                <FaTruck size={50} style={{margin: "4px 1px 0px 5px"}}/>
                <p className={styles.menuTitle}>Người vận chuyển</p>
                </Link>
               </div>
               <div className={styles.menuAcount}>
                <Link to='/Troller'className={styles.text1} style={{ textDecoration: 'none' }}>
                <GrUserWorker size={50} style={{margin: "4px 1px 0px 5px"}}/>
                <p className={styles.menuTitle}>Người thu gom</p>
                </Link>
               </div>
              
            </Menu>
            </div> 





            <div className={styles.bell}>
                <BsBellFill color="white" size={40} />
                </div>
                <div className={styles.mess}>
                <BsFillChatFill color="white" size={40} />
                </div>       
          <div className={styles.boxacount}>
          {
               
               <button className={styles.avatarOption} 
                   
               onClick={handleClick} 
               onMouseOver={handleClick} 
               >
                   <List color="currentColor" size={50} />
                   <PersonCircle color="#A1A1A1" size={58} />
               </button>    
           
       }
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
               <div className={styles.menuAcount}>
                <BsPersonSquare size={50} style={{margin: "4px 1px 0px 5px"}}/>
                <p className={styles.menuTitle}>Danh sách nhân viên</p>
               </div>
               <div className={styles.menuAcount}>
                <HiTruck size={50} style={{margin: "4px 1px 0px 5px"}}/>
                <p className={styles.menuTitle}>Danh sách thiết bị</p>
               </div>
               <div className={styles.menuAcount}>
                <HiOutlineLocationMarker size={50} style={{margin: "4px 1px 0px 5px"}}/>
                <p className={styles.menuTitle}>Danh sách MCPs</p>
               </div>
            </Menu>

          </div>

          
        </div>
        </header>

       </div>
    )
}


export default Header;