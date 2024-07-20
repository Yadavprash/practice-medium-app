import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Content } from "../components/Content";
import { Appbar } from "../components/Appbar";
import { BlogSkeleton, LineSkeleton } from "../components/BlogSkeleton";

// atomFamilies and Selector Families
export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    if (loading) {
        return <div>
            <Appbar author="Prashant Y"></Appbar>
            <div className="flex justify-center mx-8 my-4 cursor">
                <div className="flex  flex-col w-1/2 items-left p-4">
                    <div className="mt-10"></div>
                    <div className="h-6 bg-gray-200 rounded-full  w-48 "></div>
                    <BlogSkeleton></BlogSkeleton>
                    <LineSkeleton></LineSkeleton>
                    <LineSkeleton></LineSkeleton>
                    <LineSkeleton></LineSkeleton>
                </div>
            </div>
        </div>

    }
    return <div>
        <Appbar author="Prashant Y"></Appbar>
        <div className="mt-10"></div>
        <div>
            <Content
                id={blog.id}
                author={blog.author.name || "Anonymous"}
                title={blog.title || "Insert title Here"}
                content={blog.content || "No content"}
                publishedDate="abc"
            ></Content>

        </div>
    </div>
}