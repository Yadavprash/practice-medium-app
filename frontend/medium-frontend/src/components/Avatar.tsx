export const Avatar = ({author,w,h}:{author:string,w:string,h:string}) =>{
    return <div> 
        <div className={` relative inline-flex items-center justify-center w-${w} h-${h}  overflow-hidden bg-gray-100  rounded-full dark:bg-gray-600 mx-4 `}>
        <span className="font-bold text-gray-600 dark:text-gray-300">{author.charAt(0)}</span>
    </div>

    </div>
}