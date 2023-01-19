import { httpGetAllPosts, httpAddNewPost } from "./requests";
import { useCallback, useEffect, useState } from "react";

function usePosts(){
    const [posts, savePosts] = useState([]);

    const getPosts = useCallback(async ()=>{
        const fetchedEmployees = await httpGetAllPosts();
        savePosts(fetchedEmployees);
    });

    useEffect(()=>{
        getPosts();
    },[posts]);

    const addNewPost = async (post)=>{
        await httpAddNewPost(post);
    }

    return {posts, addNewPost};

}

export default usePosts;