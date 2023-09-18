import { ICertificates } from "./Certificates.tsx"

function Card({title, from, description, image, skills} : ICertificates ) {
    return (
        <div>
            {title} {from} {description} {image} {skills}
        </div>
    )
}

export default Card