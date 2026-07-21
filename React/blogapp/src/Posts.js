import React, { Component } from "react";
import Post from "./Post";
import "./App.css";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map(
          (post) => new Post(post.id, post.title, post.body)
        );

        this.setState({
          posts: posts
        });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while loading the posts.");
    console.error(error, info);
  }

  render() {
    return (
      <main className="blog-container">
        <header className="blog-header">
          <p className="blog-label">BLOG APPLICATION</p>
          <h1>Latest Posts</h1>
          <p>
            Posts loaded using the React component lifecycle and Fetch API.
          </p>
        </header>

        <section className="posts-container">
          {this.state.posts.map((post) => (
            <article className="post-card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </section>
      </main>
    );
  }
}

export default Posts;