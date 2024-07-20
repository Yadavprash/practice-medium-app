import { Link } from "react-router-dom";
interface BlogCardProps {
    author: string;
    title: string;
    content: string;
    publishedDate: string;
    id:string;
}
export const BlogCard = ({
    id,
    author,
    title,
    content,
    publishedDate
}: BlogCardProps) => {

    return <Link to={`/blog/${id}`} >

     <div className="flex justify-center mx-8 my-4 cursor">
        <div className="flex  flex-col w-1/2 items-left p-4">
            <div className="flex text-sm ">
                <div className="relative inline-flex items-center justify-center w-5 h-5 text-xs overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{author.charAt(0)}</span>
                </div>
                <div className="font-roboto">
                    {author} <span>&#183;</span> 
                </div>
                <div className="font-lato ml-2 text-gray-500">
                    {publishedDate}
                </div>
            </div>
            <div className="font-sans text-lg font-bold mt-2">
                {title}
            </div>
            <div className="text-wrap font-vollkorn text-sm">
                {content.length >= 150 ? content.slice(0,150) + `...` : content}
            </div>
            <div className="font-lato mt-2 px-1 text-xs text-gray-500">
                {Math.ceil(content.length/1000) +`min read`}
            </div>
            <div className="w-full bg-slate-200  h-px mt-4"></div>
        </div>
    </div>
    </Link>
}