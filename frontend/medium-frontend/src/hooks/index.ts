import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface BlogsType{
    content : string;
    title: string;
    id: string;
    author:{
        name :string;
    }
}

const placeholder = {
    content : "Soon",
    title: "Under COnstruction",
    id:"9",
    author : {
        name : "Shahenshah"
    }
}

export const useBlogs = () =>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<BlogsType[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization : localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlogs(response.data.blogs);
            setLoading(false);
        })
    },[])

    return {
        loading,
        blogs
    }
}


export const useBlog = ({id}:{id:string}) =>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<BlogsType>(placeholder);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization : localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlog(response.data.blog);
            setLoading(false);
        })
    },[])

    return {
        loading,
        blog
    }
}