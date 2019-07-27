import React, { Component } from 'react';

import './Blog.css';
import { Route } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" render={() => <h2>Home</h2>} />
        <Route path="/" render={() => <h2>Home 2</h2>} />
      </div>
    );
  }
}

export default Blog;
