import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { apiURL } from '../../main';
import { NavLink, useParams } from 'react-router-dom';

type videosListe = {
    id: string, name: string
}

const Result = () => {
    const params = useParams() as { name: string };
    const [videosList, setVideosListe] = useState<videosListe[] | null>(null)
    const [status, setStatus] = useState<{ isReply: boolean, error: string | null }>({ isReply: false, error: null })

    const getVideosSearched = async () => {
        await axios({
            method: "get",
            url: `${apiURL}/stream/search/${params.name}`,
        }).then(res => {
            if (res.data.noVideo) {
                setStatus({ isReply: true, error: "Aucune vidéos trouvés" })
                return
            } else {
                setVideosListe(res.data.videos);
                setStatus({ isReply: true, error: null });
                return
            }
        })
    }

    useEffect(() => {
        return () => {
            getVideosSearched()
        }
    }, [])

    return (
        <div>
            {
                status.isReply && !status.error ?
                    (
                        <div className='grid grid-cols-[200px_200px_200px] m-auto w-[600px] mt-[10px]'>
                            {
                                videosList?.map(e => {
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
                    ) : (
                        status.isReply && status.error ?
                            (
                                
                                <div className='mt-[20px]'>
                                    <h1 className='text-center text-white font-bold'>{status.error}</h1>
                                </div>
                            ) :
                            <></>
                    )
            }
        </div>
    );
};

export default Result;