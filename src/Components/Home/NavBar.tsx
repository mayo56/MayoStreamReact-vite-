import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [search, setSearch] = useState<string>();
    const token = localStorage.getItem("token");

    const onSearch = () => {
        if (!search?.trim()) return;
        window.location.href = `/search/${search}`;
    };

    const openCloseSelectMenu = () => {
        const menu = document.getElementById("selectMenu")!.style.visibility;
        console.log(menu)
        if (menu === "visible") {
            document.getElementById("selectMenu")!.style.visibility = "hidden"
        } else {
            document.getElementById("selectMenu")!.style.visibility = "visible"
        }
    }

    return (
        <div className='bg-[#202020] h-[60px] flex justify-between items-center text-white'>


            <div className='ml-[20px]'>
                <NavLink to={"/"}>
                    <h1 className='font-bold'>MayoStream</h1>
                </NavLink>
            </div>

            <div className='flex justify-center h-[50%] items-center w-[80%] max-w-[900px] mr-[20px] ml-[20px]'>
                <input type="text" className="w-[100%] h-[100%] bg-gray-500 p-[5px] rounded-l-lg resize-none outline-none"
                    value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une vidéo" />

                <div className='hover:bg-red-500 w-[30px] h-[30px] cursor-pointer text-[125%] bg-gray-500 rounded-r-lg border-l-2' onClick={onSearch}>
                    <h1>🔎</h1>
                </div>

            </div>

            <div className='w-[60px] h-[60px] mr-[20px] flex justify-center items-center'>
                <img className=' object-cover object-center rounded-full max-h-[50px] max-w-[50px] cursor-pointer'
                    src='https://xpic6.igvimg.com/group_c/2111/0802/240/9191ffeb-57f1-49b5-b58e-db6248cd471f.jpg'
                    onClick={openCloseSelectMenu} />
                <div id='selectMenu' className='invisible absolute block right-[0px] w-[150px] top-[60px]'>
                    <ul>
                        <NavLink to={"/addNewVideo"}>
                            <li className='bg-gray-500 p-[5px] hover:bg-black'>
                                Upload une vidéo
                            </li>
                        </NavLink>
                        {
                                token ?
                                    (
                                        <NavLink to={"/account"}>
                                        <li className='bg-gray-500 p-[5px] hover:bg-black'>
                                            Mon Compte
                                        </li>
                                        </NavLink>
                                    ) : (
                                        <NavLink to={"/login"}>
                                        <li className='bg-gray-500 p-[5px] hover:bg-black'>
                                            Se connecter
                                        </li>
                                        </NavLink>
                                    )
                            }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default NavBar;