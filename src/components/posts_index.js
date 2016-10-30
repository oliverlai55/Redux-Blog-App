import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>

        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}


export default connect(null, { fetchPosts })(PostsIndex);

// we are passing in object that says fetchPosts, a shortcut that gives us access to this.props.fetchPosts()
// Use ES6 to fetchPosts, if its fetchPosts: fetchPosts the same name in ES5
