import React, { useState } from 'react';

const VideoForm = () => {
    const [title, setTitle] = useState<string>("");
    
    return (
        <div className='mt-[10px] text-center'>
            <h1 className='font-bold text-[30px]'>Ajouter une vidéo ! Trop cool !!</h1>
            <br />
            <h6 className='text-[20px]'>Nom de la vidéo:<strong className='text-red-500'>*</strong></h6>
            <input type="text" className='text-black p-[5px] rounded-lg'
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
    );
};

export default VideoForm;