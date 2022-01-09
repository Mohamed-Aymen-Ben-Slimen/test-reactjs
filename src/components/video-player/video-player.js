import React from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({videoId, ...props}) {
    return <YouTube videoId={videoId} {...props}/>
}
