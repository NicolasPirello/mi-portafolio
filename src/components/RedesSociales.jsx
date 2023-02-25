import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";

const RedesSociales = () => {
  return (
    
    <div className="redesSocialesContainer">

        <ul>

            <li>
                <a href="https://github.com/NicolasPirello" target="_blank">
                    <VscGithub className="iconHome"/>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/nicolas-pirello" target="_blank">
                    <FaLinkedinIn className="iconHome"/>    
                </a>
            </li>

        </ul>

    </div>
    
  )
}

export default RedesSociales