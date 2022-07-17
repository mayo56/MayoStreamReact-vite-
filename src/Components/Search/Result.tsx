import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../main';
import { useParams } from 'react-router-dom';

type videosListe = {
    id:string, name:string
}

const Result = () => {
    const params = useParams() as {name:string};
    const [videosList, setVideosListe]= useState<videosListe[] | null>(null)
    const [status, setStatus] = useState<{isReply:boolean, error:string|null}>({isReply:false, error:null})

    const getVideosSearched = async () => {
        await axios({
            method:"get",
            url:`${apiURL}/stream/search/${params.name}`,
        }).then(res => {
            if (res.data.noVideo) {
                setStatus({isReply:true, error:"Aucune vidéos trouvés"})
                return
            } else {
                setVideosListe(res.data.videos);
                setStatus({isReply:true, error:null});
                return
            }
        })
    };

    useEffect(() => {
        return () => {
            getVideosSearched()
        }
    },[])

    return (
        <div>
            {
                status.isReply && !status.error ?
                (
                    videosList?.map(e => {
                        return (
                            <div>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default Result;