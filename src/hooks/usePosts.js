import axios from "axios";
import { useQuery } from "react-query";

export default function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  });
}

export const getPostById = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
export const getCommentByPostId = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
};
