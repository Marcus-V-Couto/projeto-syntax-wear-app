import { Link } from "@tanstack/react-router"
import LogoImage from "../../assets/img/logo.png"


export const Logo: React.FC = () => {
    return (
        <Link to="/" className="self-center">
            <img src={LogoImage} alt="Logo Syntaxwear" className="w-40" />
        </Link>
    );
}
