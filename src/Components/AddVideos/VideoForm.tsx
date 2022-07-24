import axios from 'axios';
import React, { useState } from 'react';
import { apiURL } from '../../main';

const VideoForm = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [video, setVideo] = useState<File>();

    const [error, setError] = useState<string>("");

    const uploadVideo = async () => {
        if (!title) return setError("Veuiller inserer un titre à la vidéo.")
        if (!video) return setError("Veuillez mettre un fichier vidéo.")
        await axios({
            method:"post",
            url:`${apiURL}/stream/post`,
            headers:{
                "content-type":"multipart/form-data"
            },
            data:{
                name:title,
                file:video,
            },
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            setError("Une erreur s'est produite !")
            console.log(err)
        })
    }

    return (
        <div className='mt-[10px] text-center'>
            <h1 className='font-bold text-[30px]'>Ajouter une vidéo ! Trop cool !!</h1>

            {/* Titre de la vidéo */}
            <h6 className='text-[20px] mt-[10px]'>Nom de la vidéo:<strong className='text-red-500'>*</strong></h6>
            <input type="text" className='text-black p-[5px] w-[calc(100%-100px)] max-w-[300px] rounded-lg'
                value={title} onChange={(e) => setTitle(e.target.value)} />

            {/* Description de la vidéo */}
            <h6 className='text-[20px] mt-[10px]'>Description de la vidéo:<strong className='text-blue-500'>*⚠️</strong></h6>
            <textarea className='text-black p-[5px] w-[calc(100%-20px)] max-w-[400px] rounded-lg resize-none'
                value={description} onChange={(e) => setDescription(e.target.value)} />

            {/* Vidéo */}
            <h6 className='text-[20px] mt-[10px]'>Fichier vidéo:<strong className='text-red-500'>*</strong></h6>
            <input type="file" accept='video/*' multiple={false} onChange={(e) => setVideo(e.currentTarget.files?.[0])} />

            {/* Uplaod bouton */}
            <div className='flex justify-center'>
                <h1 onClick={uploadVideo}
                    className='mt-[50px] p-[10px] bg-blue-500 rounded-lg cursor-pointer hover:shadow-blue-700 hover:shadow-md'>Publier la vidéo !</h1>
            </div>

            {/* Messages d'erreur */}
            <p className='text-red-500'>{error}</p>
        </div>
    );
};

export default VideoForm;
