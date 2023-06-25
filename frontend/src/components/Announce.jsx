import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Announce () {

    const[announceStyle, setAnnounceStyle] = useState ('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

    const handleClose = ()=> {
        setAnnounceStyle(announceStyle + " hidden") //don't display anything

    }
    return  <div className={announceStyle}>
                <h2>Hurry up 50% off Sale now !</h2>
                <CloseIcon className='cursor-pointer' onClick= {handleClose}/>
            </div>;
};

export default Announce;