import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup =()=>{
    const quote = "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
    return <div className="grid grid-cols-1   justify-items-center lg:grid-cols-2 ">
        <div className="w-full " >
        <Auth type="signup"></Auth>
        </div>
    <div className="hidden lg:block">
    <Quote quote={quote} by={"Jules Winnfield"} designation={"CE0,Acme Inc"}></Quote>
    </div>
    </div>
}