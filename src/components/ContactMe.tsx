import ContactForm from "@/components/ContactForm.tsx";
function ContactMe() {


    return (
        <div className="container mx-auto pt-10 pb-20 border-t-[2px] border-white">
            <h1 className="font-title relative text-6xl max-xl:text-4xl font-bold w-fit">Contact Me</h1>
            <div className="mt-20">
                <ContactForm />
            </div>
        </div>
    )
}


export default ContactMe