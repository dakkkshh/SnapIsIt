import './studyRoomDesk.css'
import React from 'react';

function StudyRoomDesk(props) {
    return (
      <div className="desk">
        <div className="desk-top">
            <div className="desk-top-top">
                <h2 id='deskName'>{props.deskName}</h2>
            </div>
            <div id='deskPart1'>
                <h2 class='deskPartName'>1</h2>
            </div>
            <div id='deskPart2'>
                <h2 class='deskPartName'>2</h2>
            </div>
            <div id='deskPart3'>
                <h2 class='deskPartName'>3</h2>
            </div>
            <div id='deskPart4'>
                <h2 class='deskPartName'>4</h2>
            </div>
        </div>
      </div>
    );
  }
export default StudyRoomDesk;