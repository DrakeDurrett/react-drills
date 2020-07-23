import React, {Component} from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url}></img>
                <div>Error 599</div>
            </div>
        )
    }
}

export default Image;