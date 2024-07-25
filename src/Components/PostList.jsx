import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../Store/post-list-store";
const PostList = () => {
  const {postList} = useContext(PostListData);
  return (
    <>
    {postList.map((post) => <Post  key={post.id} post={post}/>)}
      {/* <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post> */}
    </>
  );
};
export default PostList;
