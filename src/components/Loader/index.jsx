import { LoaderContainer, LoaderImage } from "./styled";

import loader from "@assets/loader.gif"

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderImage src={loader} alt="loader" />
        </LoaderContainer>
    )
}

export default Loader