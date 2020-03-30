import React from 'react';
import PropTypes from 'prop-types'
import './actions.css';

const actions = (props) => {
    return (
        <>
                <button className="btn-repos" onClick={props.mostraRepos}>See repos </button>
                <button className="btn-fav" onClick={props.mostraFav}>see fav repos</button>
        </>
    )
};
actions.propTypes = {
    mostraRepos: PropTypes.func.isRequired,
    mostraFav: PropTypes.func.isRequired
}


export default actions;