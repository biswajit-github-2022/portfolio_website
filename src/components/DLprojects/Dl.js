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
                <div class="dl_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="dl_card-image"/> */}
                    <div class="dl_card-content" >
                        <h2 class="dl_card-title">Text to Speech</h2>
                        <p class="dl_card-text">Implementing tts using NVdia TacoTron-2 model on LJspeech dataset</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_speech" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="dl_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="dl_card-image"/> */}
                    <div class="dl_card-content" >
                        <h2 class="dl_card-title">Chat with PDF (CLI)</h2>
                        <p class="dl_card-text">Implementing Llama model on PDF data and using LLM for question answering. Works on CLI</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/llama" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="dl_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="dl_card-image"/> */}
                    <div class="dl_card-content" >
                        <h2 class="dl_card-title">Chat with PDF (Web)</h2>
                        <p class="dl_card-text">Implementing Llama model on PDF data and using LLM for question answering. Works on Web</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="dl_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="dl_card-image"/> */}
                    <div class="dl_card-content" >
                        <h2 class="dl_card-title">Chat with CSV (API)</h2>
                        <p class="dl_card-text">Question answering with csv using OpenAi API key</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Dl;