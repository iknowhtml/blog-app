import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPosts from '../actions/postsActionCreator';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => (
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.object,
  fetchPosts: PropTypes.func.isRequired,
};

PostsIndex.defaultProps = {
  posts: {},
};

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
