import React from 'react';
import FacebookIconOutlined from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIconOutlined from '@mui/icons-material/LocationOn';
import LocalPhoneIconOutlined from '@mui/icons-material/LocalPhoneOutlined';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {

    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';

  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px]'>
                MY STYLES
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
            repellendus dignissimos iure itaque architecto pariatur quia a eveniet
            veniam?
            </p>
{/*store information */}
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialStyle + ` bg-blue-700`}>
                    <FacebookIconOutlined/>
                </div>

                <div className={socialStyle + ` bg-orange-500`}>
                    <InstagramIcon/>
                </div>

                <div className={socialStyle + ` bg-sky-400`}>
                    <TwitterIcon />
                </div>

                <div className={socialStyle + ` bg-red-600`}>
                    <PinterestIcon/>
                </div>
            </div>
            
        </div>
{/*contact information*/ }
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
                <LocationOnIconOutlined className="text-[#8a4af3]"/>
                <p className='pl-3'>Western Province Sri Lanka</p>
            </div>

            <div className='flex m-3'>
                <LocalPhoneIconOutlined className='text-[#521da8]' />
                <p className='pl-3'>011 457 8960</p>
            </div>

            <div className='flex m-3'>
                <EmailIcon className='text-[#8a4af3]'/>
                <p className='pl-3'>himashanethmini24@gmail.com</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;
