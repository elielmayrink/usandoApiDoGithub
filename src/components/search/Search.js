import React from 'react';
import PropTypes from "prop-types"
import './search.css';
//import { checkPropTypes } from 'prop-types';

const search = (props) => {
    return(
        <>
            <div className="search">
                <input 
                disabled={props.isDisabled}
                type="search" 
                placeholder="Enter github userName " 
                onKeyUp={props.changed}
                />
            </div>
        </>
    )
};
search.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    changed: PropTypes.func.isRequired
}

export default search;