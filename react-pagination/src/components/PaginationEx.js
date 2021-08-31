import React, { useEffect, useState } from "react";
import Pgination2 from "./Pgination2";
import Post from "./Post";

export default function PaginationEx() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong");
      })

      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));

    console.log(posts);
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pgination2
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
        <h1>No Post to Display</h1>
      )}
    </div>
  );
}
