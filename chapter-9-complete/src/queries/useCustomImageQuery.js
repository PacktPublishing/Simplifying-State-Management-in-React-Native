import { useQuery } from "react-query";
import { requestBase } from "./src/utils/constants";

const fetchLoginStatus = async () => {
  const response = await fetch(requestBase + "/loginState.json");
  return response.json();
}
  
const getPostById = async (postId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return data;
};

export default function usePost(postId) {
  return useQuery(["post", postId], () => getPostById(postId));
}
