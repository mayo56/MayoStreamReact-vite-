import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiURL } from '../../main';

type Video = {
    id: string; name: string; extention: string;
}

const ListVideoRandom = () => {
    const [listVideo, setListeVideos] = useState<Video[] | null>(null);

    const getVideosList = async () => {
        await axios({
            method: "get",
            url: `${apiURL}/stream/videos/random`
        }).then(res => {
            setListeVideos(res.data.videos);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        return () => {
            getVideosList()
        }
    },[])

    return (
        <div>
            <div className='grid grid-cols-[200px_200px_200px] m-auto w-[600px] mt-[10px]'>
                {
                    listVideo?.map(e => {
                        return (
                            <NavLink to={`/watch/${e.id}`}>
                                <div key={e.id} className={"hover:bg-gray-700 p-[10px]"} >
                                    <img src="https://xpic6.igvimg.com/group_c/2111/0802/240/9191ffeb-57f1-49b5-b58e-db6248cd471f.jpg" alt="dsqd" />
                                    <p className='text-white text-center font-bold break-words'>{e.name}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ListVideoRandom;
