
import { getImages } from "../../utils/getImages"
import { Container } from "./Style"

function Card(item) {
    return (
        <Container>
            <img src={getImages(item.poster_path)}  alt="poster" />
            <h3>{item.original_title}</h3>
        </Container>
    )
}

export default Card