type quoteprops ={
    quote : string;
    by : string;
    designation: string;
}
export const Quote  = ({quote,by,designation} : quoteprops) =>{
    return <>
    <div className="flex w-full h-screen bg-gray-200 flex-col items-center justify-center  ">
        <div className="flex w-1/2  font-bold text-2xl text-wrap">
           {quote}
        </div>
        <div className="w-1/2 mt-4  font-helvetica font-bold text-xl text-left">
            {by}
        </div>
        <div className="w-1/2 mt-2  font-mono text-left text-slate-600">
            {designation}
        </div>
    </div>
    </>
}