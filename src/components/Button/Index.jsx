import { ButtonRed, ButtonTrailer, ButtonWhite } from "./Style"

function Button({ children, red }) {
    return (
        <>
            {red ?
                (<ButtonRed>{children}</ButtonRed>)
                :
                (<ButtonWhite>{children}</ButtonWhite>)
            }

        </>
    )
}

export default Button