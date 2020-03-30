import React from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import UserInfo from './userInfo/UserInfo';
import Actions from './actions/Actions';
import Repositories from './repositories/Repositories';
import Starred from './starred/Starred';

const AppContent = (props) => {
    return(
        <>
            <Search
            isDisabled={props.isFetching}
            changed={props.changed}/>

            
            {!!props.userInfo && <UserInfo userInfo={props.userInfo} />}
            {props.isFetching && <div className='loading'>Carregando...</div>}
            {!!props.userInfo && <Actions
            mostraRepos={props.mostraRepos}
            mostraFav={props.mostraFav}/>}

            {!!props.repos.length && props.btnState === true && <Repositories
                 closedRepos={props.closedRepos}
                 repos={props.repos}
                 />}
            {!!props.starred.length && props.btnState === false && <Starred
                closedFav={props.closedFav}
                repos={props.starred} />}
        </>
    )
                }

AppContent.propTypes = {
    userInfo: PropTypes.object,                 
    repos: PropTypes.array.isRequired,                    
    starred: PropTypes.array.isRequired,
    mostraFav: PropTypes.func.isRequired,
    mostraRepos: PropTypes.func.isRequired,
    closedRepos: PropTypes.func.isRequired,
    closedFav: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}


export default AppContent;
