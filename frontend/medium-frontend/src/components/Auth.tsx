import { SignupInput } from "@yadavprash/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendReq(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signin"? "signin" : "signup"}`,postInputs);
            const token = response.data.token;
            localStorage.setItem("token",token);
            navigate("/blogs");
        }catch(e){
            alert(e);
        }
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center  ">
            <div>
                <div className="text-4xl text-center font-sans font-bold">
                {type == "signup" ? "Create an Account ": "Login to Medium" }
                </div>
                <div className="text-s text-gray-500 text-center">
                    {type == "signup" ? "Already have and Account ": "Don't Have an account" }
                    <Link className="pl-1 underline" to={ type == "signin"? "/signup" :"/signin"}>
                    {type == "signup" ? "Login ": "Sign Up" }
                    </Link>
                </div>
            </div>

            <div className="w-1/2 m-4 px-2 flex flex-col">
                {type == "signup"? <Label
                    label="Username"
                    placeholder="Enter your name"
                    value={postInputs.name}
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }));
                    }}
                /> : null }

                <Label
                    label="Email"
                    placeholder="abc@example.com"
                    type="email"
                    value={postInputs.username}
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        }));
                    }}
                />

                <Label
                    label="Password"
                    placeholder="makeifFlashy"
                    type="password"
                    value={postInputs.password}
                    onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }));
                    }}
                />

                <button onClick={sendReq} className="text-white bg-black my-1 py-2 font-mono border-2 rounded-md px-2">Sign Up</button>
            </div>
        </div>
    );
};

interface LabelType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | undefined;
    type?: string;
}

function Label({ label, placeholder, onChange, value, type = "text" }: LabelType) {
    return (
        <div className="flex flex-col">
            <label className="text-lg font-bold">{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                className="border-2 py-1 px-2 rounded my-2"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
