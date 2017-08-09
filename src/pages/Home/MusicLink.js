import '../../css/index.css';
import React, { Component } from 'react';

class MusicLink extends Component {
    render() {
        const musicLinks = {
            vaporwave: 'https://www.youtube.com/watch?v=cU8HrO7XuiE',
            outrun: 'https://www.youtube.com/watch?v=rDBbaGCCIhk',
        };
        return (
            <a target='_blank' href={musicLinks[this.props.style]}>this</a>
        );
    }
}

export default MusicLink;