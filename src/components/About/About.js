import "./About.css"
import github from "../../icons/github.svg";
import web from "../../icons/web.svg";

import logo from "../../icons/belur.jpg";
import logo2 from "../../icons/pbc.png";
import logo3 from "../../icons/pbbhs_.png";
function Dl() {
    return (

        <div className="abt_main">
            <div className="abt_heading">
                About Me
            </div>
            <div className="abt_body">



                <div className="edu">
                    <div className="heading_edu">
                        Education
                    </div>
                    <div className="card_edu1">
                        <span className="text_edu1">
                            • M.Sc. in Big data Analytics&nbsp;<br />
                            • @Ramakrishna Mission Vivekananda and Educational University <br />
                            • Aug,2023 - Present <br />
                            • 8.5 SGPA (as of 2nd sem)
                        </span>
                        <img className="img_edu1" src={logo} alt="" />
                    </div>
                    <div className="card_edu2">
                        <span className="text_edu2">
                            • B.Sc. in Computer Science&nbsp;<br />
                            • @Panskura Banamali College (VidyaSagar University) <br />
                            • dec,2020 - Apr,2023 <br />
                            • 8.9 CGPA
                        </span>
                        <img className="img_edu2" src={logo2} alt="" />
                    </div>
                    <div className="card_edu3">
                        <span className="text_edu3">
                            • Higher Secondary in Pure Science&nbsp;<br />
                            •  @Panskura Bradley Birt High School <br />
                            • May,2018 - Jan,2020 <br />
                            • 87.48% in PCMB
                        </span>
                        <img className="img_edu3" src={logo3} alt="" />
                    </div>
                </div>




                {/* <div className="skill">

                    <div className="heading_edu">
                        Skills
                    </div>

                    <div className="skill_1">
                        <div>
                            Databases
                        </div>
                        <div className="new">
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            <span className="a">a</span>
                            
                        </div>

                    </div>
                </div> */}




            </div>
        </div>

    );
}

export default Dl;