import React from 'react';
import './repositories.css'

const repositories = ({repos, closedRepos}) => {
    return (

        <>
            <div className="repos-div">
            <p className="btnClosedRepos" onClick={closedRepos}>x</p>
                <h2>Repositories:</h2>
                <ul className="repos">
                    {repos.map((repo) => (<li key={repo.link}><a href={repo.link} target="_blanck">{repo.name}</a></li>))}
                    
                </ul>
            </div>
 
        </>
    )
};

export default repositories;    