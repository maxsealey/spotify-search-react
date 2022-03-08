import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction(isRemoval) {
        // needs conditional to determine button, step 27
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3></h3>
                    <p></p>
                </div>
                <button className="Track-action"></button>
            </div>
        )
    }
}

export default Track;

