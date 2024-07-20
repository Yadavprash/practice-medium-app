import { Avatar } from "./Avatar";

interface ContentType {
    id: string;
    author: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const Content = ({author, title, content, publishedDate }: ContentType) => {
    return <div className="flex justify-center mx-8 my-4 ">
        <div className="flex  flex-col w-1/2 items-left p-4 ">
            <div className="font-sans text-2xl font-black mt-2 m-2 px-2 py-1">
                {title}
            </div>
            <div className="flex">
                <Avatar author={author} w={"8"} h={"8"} ></Avatar>
                <div className="flex flex-col ">
                    <div className="text-sm ">
                        {author}
                    </div>
                    <div className="text-sm whitespace-pre text-slate-600 font-book">
                        {`${Math.ceil(content.length / 1000)} min read   .  ${publishedDate} `}
                        
                    </div>
                </div>
            </div>
            <div className="font-book font-light text-lg   px-4 py-2">
                {content}
            </div>
        </div>
    </div>
}