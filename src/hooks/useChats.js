import axios from "axios";
import { useQuery } from "react-query";

//Cette fonction nous retourne une liste des Post
export default function useChats() {
  return useQuery("chats", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  });
}
