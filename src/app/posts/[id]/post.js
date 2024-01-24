/*
import Link from "next/link";

export default async function PostsPage({searchParams}) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
  let posts = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Posts</h1>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}({post.userId})
              </Link>
            </div>
          );
        })}
    </div>
  );
}
*/