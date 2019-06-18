import React, {Component} from 'react';

class Image extends Component {
    
    render(){
        return (
            <img src={this.props.images} />
        )
    }
}

export default Image;