import React from 'react';
import PropTypes from 'prop-types';
import './userInfo.css'

const userInfo = (props) => {
    return (
        <>
            <div className="userInfo">
                <img 
                    src={props.userInfo.img} 
                    alt="Imagem com rosto do usuario" />
                <h1><a href={`https://github.com/${props.userInfo.login}`} target='_blanck'>{props.userInfo.userName}</a></h1>

                     <ul className= "repos-info">
                         <li>Repositories: {props.userInfo.repositories } </li>
                         <li>followers: {props.userInfo.followers}</li>
                         <li>following: {props.userInfo.following} </li>
                    </ul>
            </div>
        </>
    )
}
userInfo.propTypes = {
    userInfo: PropTypes.shape(
        {
            userName: PropTypes.string.isRequired,
            repositories: PropTypes.number.isRequired,
            followers: PropTypes.number.isRequired,
            following: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired
        }
    )
}

export default userInfo;