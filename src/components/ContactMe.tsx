import ContactForm from "@/components/ContactForm.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import mail from "../assets/mail.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import arrowright from "../assets/arrow-right.svg"

function ContactMe() {


    return (
        <div className="container mx-auto pt-10 pb-20 border-t-[2px] border-white">
            <h1 className="font-title relative text-6xl max-xl:text-4xl font-bold w-fit">Contact Me</h1>
            <div className="mt-20 flex gap-10 items-center justify-center max-md:flex-col">
                <div className="flex flex-col gap-5 max-md:flex-row max-md:flex-wrap">
                    <Card className="basis-1/3 grow">
                        <CardHeader>
                            <CardTitle className="flex justify-center gap-2 text-base items-center">
                                <img className="h-[32px] w-[32px]" src={mail} alt=""/>
                                Email
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <p className="text-sm text-[#ff5d73]">ychoeth@proton.me</p>
                        </CardContent>
                        <CardFooter className="flex justify-center text-sm">
                            <a className="group" href="mailto:ychoeth@proton.me">Write me <img className="inline group-hover:animate-bounce"
                                                                       src={arrowright} alt=""/></a>
                        </CardFooter>
                    </Card>
                    <Card className="basis-1/3 grow">
                        <CardHeader>
                            <CardTitle className="flex justify-center gap-2 text-base items-center">
                                <img className="h-[32px] w-[32px]" src={linkedin} alt=""/>
                                Linkedin
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <p className="text-sm text-[#ff5d73]">Vladislav Zavtur</p>
                        </CardContent>
                        <CardFooter className="flex justify-center text-sm">
                            <a className="group" href="https://linkedin.com/in/vladislav-zavtur-b4a794283/" target="_blank">Write me <img className="inline group-hover:animate-bounce"
                                                                       src={arrowright} alt=""/></a>
                        </CardFooter>
                    </Card>
                    <Card className="basis-1/3 grow">
                        <CardHeader>
                            <CardTitle className="flex justify-center gap-2 text-base items-center">
                                <img src={twitter} alt=""/>
                                Twitter
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <p className="text-sm text-[#ff5d73]">ychoeth</p>
                        </CardContent>
                        <CardFooter className="flex justify-center text-sm">
                            <a className="group" href="https://x.com/ychoeth" target="_blank">Write me <img className="inline group-hover:animate-bounce"
                                                                       src={arrowright} alt=""/></a>
                        </CardFooter>
                    </Card>
                </div>
                <div className="grow">
                    <h1 className="font-chakra text-3xl mb-5">Write me a message</h1>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}


export default ContactMe