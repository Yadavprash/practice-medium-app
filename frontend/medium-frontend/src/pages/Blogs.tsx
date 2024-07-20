import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"



export const Blogs = () =>{
   const {loading,blogs} = useBlogs();
   if(loading){
    return <div>
        <Appbar author = "Prashant Y"></Appbar>
        <div className="flex justify-center mx-8 mt-20 cursor">
        <div className="flex  flex-col w-1/2 items-left p-4">
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
            </div>
        </div>
    </div>
   }
   
    return <div>
        <Appbar author = "Prashant Y"></Appbar>

        <div className="mt-20 ">
        {blogs.map(blog  =>
            <BlogCard
            id={blog.id}
            author={blog.author.name || "Anonymous"}
            title={blog.title || "Insert title Here"}
            content={blog.content || "No content"}
            publishedDate="abc"
            ></BlogCard>
        )}
          

        </div>
    </div>
}