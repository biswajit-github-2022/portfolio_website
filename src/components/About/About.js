import "./About.css"
import github from "../../icons/github.svg";
import web from "../../icons/web.svg";
function Dl() {
    return (

        <div className="abt_main">
            <div className="abt_heading">
                About Me
            </div>
            <div className="abt_body">
                <h1>Education</h1>
                <p>
                • Currently In 2nd Year of my <b>M.Sc in Data Science</b>  from <b>Ramakrishna Mission Vivekananda and Educational University</b> 
                </p>
                <p>
                • Completed <b>B.Sc in Computer Science</b> from <b>Panskura Banamali College</b> under <b>Vidyasagar University</b> -- CGPA : 8.9
                </p>
                <p>
                • Completed <b>Higher Secondary</b> from <b>Panskura Bradley Birt High School</b> in Pure Science  -- Percentage : 87%
                </p>

                <h1>Skills</h1>
                    <p> <b>DataBases</b> : Mysql , MongoDB, Neo4j</p>
                    <p> <b>Data Science</b> : Machine Learning, Deep Learning, NLP, AI</p>
                
            </div>
        </div>

    );
}

export default Dl;