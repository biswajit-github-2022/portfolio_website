import "./Dl.css"
import github from "../../icons/github.svg";
function Dl() {
    return (
        <div className="dl_body">
            <div className="dl_heading">
                Deep Learning Projects
            </div>

            <div class="dl_container">
                <div class="dl_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="dl_card-image"/> */}
                    <div class="dl_card-content" >
                        <h2 class="dl_card-title">U-net From scratch</h2>
                        <p class="dl_card-text">Implementing U-net from scratch using tenserflow on red blood cell image dataset for segmentation</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_vid/U-net" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Dl;