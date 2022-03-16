import React from 'react';
import './TrackList.css';
import Track from '../Track';

class TrackList extends React.Component {
    render() {
        <div className = "TrackList">
            { this.props.tracks.map(track => {
                return <Track track={track} key={track.id} />
            }) }
        </div>
    }
}

export default TrackList;