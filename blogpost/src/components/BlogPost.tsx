interface BlogPostProps {
    post: {
      id: number;
      title: string;
      body: string;
      userId: number;
    };
  }
  
  const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    return (
      <div className="blog-post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <small>Author ID: {post.userId}</small>
      </div>
    );
  };
  
  export default BlogPost;
  