import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../main';

type video = {
    id: string, name: string, extention: string
}

const Video = () => {
    const param = useParams() as { id: string };
    const [infoVideo, setInfoVideo] = useState<video | null>(null)

    const getInfoVideo = async () => {
        await axios({
            method: "get",
            url: `${apiURL}/stream/info/${param.id}`
        }).then(res => {
            setInfoVideo(res.data.data)
        })
    }
    useEffect(() => {
        return () => {
            getInfoVideo()
        }
    }, [])
    return (
        <div className='mt-[10px]'>
            {
                infoVideo ?
                    (
                        <div className='grid grid-rows-[minmax(714px,_0fr)_200px_auto]'>
                            <video className='max-h-[714px] m-auto bg-black w-[90%]' controls>
                                <source src={`${apiURL}/stream/${infoVideo.id}.${infoVideo.extention}`} />
                            </video>
                            <h1>{infoVideo.name}</h1>
                        </div>
                    ) : (
                        <></>
                    )
            }
        </div>
    );
};

export default Video;