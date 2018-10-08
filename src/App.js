import React, { Component, Fragment } from 'react';
import './App.scss';

import Content from './components/Content'
import Sidebar from './components/Sidebar'

class App extends Component {

  state = {
    info: {
      name: ''
    },
    posts: [],
    author: {
      name: ''
    },
    isLoading: true
  }

  async componentDidMount() {
    const { data } = await import('./data.json')
    const { info, posts, author } = data
    console.log(data)
    this.setState({
      info,
      posts,
      author,
      isLoading: false
    })
  }

  render() {
    const {
      info,
      posts,
      author,
      isLoading
    } = this.state

    return (
      <div className="trell-app">
        {
          isLoading ?
          (
            'Loading'
          )
          :
          (
            <Fragment>
              <Content author={author} info={info} posts={posts} />
              <Sidebar info={info} />
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default App;
