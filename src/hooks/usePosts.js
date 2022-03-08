import axios from "axios";
import { useQuery } from "react-query";

//Cette fonction nous retourne une liste des Post
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

// cette fonction nous retourne les commentaires lies a un post en lui donnant comme parametres l'ID du Post
export const getCommentByPostId = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
};
