import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [search, setSearch] = useState<string>();
    let nav = useNavigate()

    const onSearch = () => {
        if (!search?.trim()) return;
        nav(`/search/${search}`);
    };

    return (
        <div className='bg-[#202020] h-[60px] flex justify-between items-center text-white'>


            <div className='ml-[20px]'>
                <NavLink to={"/"}>
                <h1 className='font-bold'>MayoStream</h1>
                </NavLink>
            </div>

            <div className='flex justify-center h-[50%] items-center w-[80%] max-w-[900px] mr-[20px] ml-[20px]'>
                <input type="text" className="w-[100%] h-[100%] bg-gray-500 p-[5px] rounded-l-lg resize-none outline-none"
                    value={search} onChange={e => setSearch(e.target.value)} />

                <div className='hover:bg-red-500 w-[30px] h-[30px] cursor-pointer text-[125%] bg-gray-500 rounded-r-lg border-l-2' onClick={onSearch}>
                    <h1>🔎</h1>
                </div>

            </div>

            <div className='w-[60px] h-[60px] mr-[20px] flex justify-center items-center'>
                <img className=' object-cover object-center rounded-full max-h-[50px] max-w-[50px]'
                    src='https://xpic6.igvimg.com/group_c/2111/0802/240/9191ffeb-57f1-49b5-b58e-db6248cd471f.jpg' />
            </div>


        </div>
    );
};

export default NavBar;