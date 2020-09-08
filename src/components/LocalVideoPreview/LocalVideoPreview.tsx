import React, { CSSProperties } from 'react';
import { LocalVideoTrack } from 'twilio-video';
import VideoTrack from '../VideoTrack/VideoTrack';
import useVideoContext from '../../hooks/useVideoContext/useVideoContext';

function Ident () {

    var style: CSSProperties = {
      position: 'absolute',
      margin: 20,
      bottom: 0,
      left: 0,
      opacity: 0.5,
      width: "20%"
    }
    return <img style={style} src={"https://static1.squarespace.com/static/5d53ea7d42c648000193ca0f/t/5dbddf576b4e151dedc2fc62/1599053854911/?format=1500w"}/>
}

export default function LocalVideoPreview() {
  const { localTracks } = useVideoContext();

  const videoTrack = localTracks.find(track => track.name.includes('camera')) as LocalVideoTrack;

  if (videoTrack) {
    return (
      <>
        <VideoTrack track={videoTrack} isLocal />
        <Ident />
      </>
    )
  }
  return null;
}
