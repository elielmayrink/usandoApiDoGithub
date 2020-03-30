import React, { Component } from 'react';
import AppContent from './components/AppContent'
import Ajax from '@fdaciuk/ajax'
import './App.css';


class App extends Component {
constructor() {
  super()
  this.state = {
    userInfo: null,
    repos: [],
    starred: [],
    btnState: 1,
    isFetching: false

}

  }


  render(){
    const changedUser = (e) => {
      const value = e.target.value;
      const keyCode = e.which || e.keyCode;
      const Enter = 13;
      if(keyCode === Enter){
        this.setState({isFetching: true})
        Ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              userName: result.name,
              login: result.login,
              repositories: result.public_repos,
              followers: result.followers,
              following: result.following,
              img: result.avatar_url
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({isFetching: false}))
        
      }
    }
    const getRepos = (type)  => {
      const user = this.state.userInfo.login; 
        Ajax().get(
          `https://api.github.com/users/${user}/${type}`)
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => {
            return {
              id: repo.id,
              name: repo.name,
              link: repo.html_url
            }
          })
            
          }, () => {
             
              this.setState({btnState: type === "repos"})
            
            
          })
        })
      }
      const closed = () => {
        this.setState({btnState: 1})
      }

  return (
    <div className="App">
      <AppContent 
      {...this.state}
      mostraRepos={() => getRepos("repos")}
      mostraFav={() => getRepos("starred")}
      changed={(e) => changedUser(e)}
      closedRepos={closed}
      closedFav={closed}
        />
    </div>
  );
}
}

export default App;
