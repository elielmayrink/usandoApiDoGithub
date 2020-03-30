import React from 'react';
import './starred.css'

const starred = ( {repos, closedFav} ) => {
    return (

        <>
            <div  className="starred">
                <p className="btnClosedFav" onClick={closedFav}>x</p>
                <h2>fav:</h2>
                <ul>
    {repos.map((repo) => (<li key={repo.id}><a href={repo.link} target="_blanck">{repo.name}</a></li>))}
                   
                </ul>
            </div>
        </>
    )
};

export default starred;