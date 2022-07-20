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
    const [error, setError] = useState({ error: false })

    const getInfoVideo = async () => {
        await axios({
            method: "get",
            url: `${apiURL}/stream/info/${param.id}`
        }).then(res => {
            setInfoVideo(res.data.data);
            document.title = `${res.data.data.name} - MayoStream`;
        }).catch(err => {
            setError({ error: true })
            document.title = `Vidéo introuvable - MayoStream`;
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
                        <div className='m-auto w-screen text-white'>
                            <div className='m-auto xl:w-[1280px]'>
                                <video id="video" className='max-h-[714px] xl:w-[1280px] bg-transparent' autoPlay={true} controls>
                                    <source src={`${apiURL}/stream/${infoVideo.id}.${infoVideo.extention}`} />
                                </video>

                                {/* Titre de la vidéo */}
                                <div className='mt-[10px]'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>{infoVideo.name}</h1>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        //Si une erreur se produit (Aucune vidéo)
                        error.error ?
                            (
                                <div>
                                    <h1 className='text-center text-white'>Cette vidéo n'existe pas.</h1>
                                </div>
                            ) : (
                                <>

                                </>
                            )
                    )
            }
        </div>
    );
};

export default Video;