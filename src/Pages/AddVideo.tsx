import React from 'react';
import VideoForm from '../Components/AddVideos/VideoForm';
import NavBar from '../Components/Home/NavBar';

const AddVideo = () => {
    return (
        <div className='text-white'>
            <NavBar />
            <VideoForm />
        </div>
    );
};

export default AddVideo;