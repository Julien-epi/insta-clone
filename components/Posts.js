
import Post from './Post';

const posts = [
  {
    id: "123",
    username: "Julien",
    caption: "hello",
  },
  {
    id: "321",
    username: "Julien",
    caption: "hello",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      {/* <Post /> */}
    </div>
  );
}

export default Posts;
