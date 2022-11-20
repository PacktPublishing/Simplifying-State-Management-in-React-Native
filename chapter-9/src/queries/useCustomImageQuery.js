import { useQuery } from "@tanstack/react-query";
import { requestBase } from "../utils/constants";

const getImages = async () => {
  const response = await fetch(requestBase + "/john_doe/likedImages.json");
  return response.json();
}

export const useCustomImageQuery = () => {
  const { data } = useQuery(['loginState']);

  return useQuery(
    ["imageList"],
    getImages, 
    {
    enabled: data?.loggedIn,
  });
};

  
// const getPostById = async (postId) => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   return data;
// };


// export default function usePost(postId) {
//   return useQuery(["post", postId], () => getPostById(postId));
// }
