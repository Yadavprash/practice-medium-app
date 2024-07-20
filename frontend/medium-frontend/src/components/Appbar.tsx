import { Notibell } from "./Notibell";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { WriteIcon } from "./WriteIcon";
import { Avatar } from "./Avatar";

export const Appbar = ({ author }: {
    author: string;
}) => {
    return <div className="fixed top-0 left-0 bg-white w-full z-50">
        <div className="flex justify-between px-2 py-2  ">
            <div className="flex">
                <div className="font-courier ml-1 mr-4 font-bold text-3xl">
                    <Link to={"/blogs"}>Medium</Link>
                </div>
                <div>
                    <SearchBar></SearchBar>
                </div>
            </div>
            <div className="flex">
                <div className="flex  pb-2  flex-col justify-center">
                    <Link to={"/compose"}><WriteIcon></WriteIcon></Link>
                </div>
                <div className="flex flex-col  justify-center px-6">
                    <Notibell></Notibell>
                </div>
                <div>
                    <Avatar author = {author} w={"8"} h={"8"}></Avatar>
                </div>
            </div>

        </div>
    </div>
}