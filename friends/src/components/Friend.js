import React, { Component } from 'react';




class Friend extends Component {


    render(){

        return (
            <li className='friend'>
	            <img className="profile-pic" src={ this.props.picture_square } />

                <h3>{ this.props.name }</h3>

                <div className="location">
                    Location: { this.props.city }, { this.props.state }, { this.props.country }
                </div>

                <div className="status">
                    { this.props.status } <span className="hashtag">#ihateprovo</span>
                </div>

                <div className="num-friends">
                    { this.props.friendCount }
                </div>
            </li>
        )
    }
}

export default Friend;