import BlogPost from './BlogPost';

interface BlogPostListProps {
  posts: Array<{
    id: number;
    title: string;
    body: string;
    userId: number;
  }>;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <div>
        <h1>Blog Post List</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
