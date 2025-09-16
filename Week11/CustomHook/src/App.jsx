import { useState } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

export default function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );
  // react swr, transback query
  return (
    <>
      <button onClick={() => setCurrentPossfghbcvt(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </>
  );
}
