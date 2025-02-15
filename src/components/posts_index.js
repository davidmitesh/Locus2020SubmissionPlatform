import React,{Component} from 'react';
import _ from 'lodash';
import { connect } from "react-redux";
import { List ,Segment,Link} from "react-router-dom";
import { fetchPosts } from "../actions";
class PostsIndex extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPosts() {
      return
     ( <Segment
         // inverted
         >
         <List divided inverted relaxed>
             _.map(this.props.posts, post => {
                 console.log('hey i am called')


              // <List.Item key={post.id}>
              //     <List.Content>
              //         <List.Header>{post.title}</List.Header>
              //     </List.Content>
              // </List.Item>
              // className="list-group-item" key={post.id}>
              //   <Link to={`/posts/${post.id}`}>
              //     {post.title}
              //   </Link>
              // </li>

          });
         </List>
     </Segment>

 )};

    render() {
      return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
            {console.log(this.props.posts)}
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }

}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
