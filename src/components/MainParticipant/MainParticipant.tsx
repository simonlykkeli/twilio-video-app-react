import MainParticipantInfo from '../MainParticipantInfo/MainParticipantInfo';
import ParticipantTracks from '../ParticipantTracks/ParticipantTracks';
import React, { CSSProperties } from 'react';
import useMainSpeaker from '../../hooks/useMainSpeaker/useMainSpeaker';
import useSelectedParticipant from '../VideoProvider/useSelectedParticipant/useSelectedParticipant';
import useScreenShareParticipant from '../../hooks/useScreenShareParticipant/useScreenShareParticipant';

function Ident () {

    var style: CSSProperties = {
      position: 'absolute',
      margin: 20,
      bottom: 0,
      left: 0,
      opacity: 0.5,
      width: "20%"
    }
    return <img alt="Lykkeli Logo" style={style} src={"https://static1.squarespace.com/static/5d53ea7d42c648000193ca0f/t/5dbddf576b4e151dedc2fc62/1599053854911/?format=1500w"}/>
}

export default function MainParticipant() {
  const mainParticipant = useMainSpeaker();
  const [selectedParticipant] = useSelectedParticipant();
  const screenShareParticipant = useScreenShareParticipant();

  const videoPriority =
    mainParticipant === selectedParticipant || mainParticipant === screenShareParticipant ? 'high' : null;

  return (
    /* audio is disabled for this participant component because this participant's audio 
       is already being rendered in the <ParticipantStrip /> component.  */
    <MainParticipantInfo participant={mainParticipant}>
      <ParticipantTracks participant={mainParticipant} disableAudio enableScreenShare videoPriority={videoPriority} />
      <Ident />
    </MainParticipantInfo>
  );
}
