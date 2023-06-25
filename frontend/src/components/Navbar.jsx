import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Badge } from '@mui/material';

function Navbar() {
    const style= "text-[14px] cursor-pointer ml-[25px]"

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px]
        flex justify-between items-center">

            <div className="left flex flex-1 items-center">
                <div className="language cursor-pointer text-[16px] mobile:hidden">
                    En
                </div>

                {/*search input*/}
                <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
                    <input type="text" className="border-none mobile:w-[50px]" placeholder="Search" />
                    <SearchIcon className="text-[#8a4af3] m" style={{fontSize: '16px'}}/>
                </div>
            </div>

{/*center in the navbar - logo */}
            <div className="center flex-1 text-center mobile:ml-6">
                <div className="logo font-bold text-lg">Winter Kings</div>
            </div>

{/*right side of the navbar*/}
            <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
                <div className={style}>Register </div>
                <div className={style}>Sign In</div>
                <Badge badgeContent={2} color="primary">
                        <AddShoppingCartIcon/>
                </Badge>
                    
            </div>


        </div>
    </div>
  
)
};

export default Navbar;
