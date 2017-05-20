import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/postsActionCreator';
import root from '../helper/root_resolver';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push(`/${root}`);
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>...loading</div>;
    }

    return (
      <div>
        <Link to={`${root}/`}>Back to Posts</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
