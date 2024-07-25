import "./About.css"
import github from "../../icons/github.svg";
import web from "../../icons/web.svg";
function Dl() {
    return (
        <div className="abt_body">
            <div className="abt_heading">
                Deep Learning Projects
            </div>

            <div class="abt_container">
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">U-net From scratch</h2>
                        <p class="abt_card-text">Implementing U-net from scratch using tenserflow on red blood cell image dataset for segmentation</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_vid/U-net" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">Text to Speech</h2>
                        <p class="abt_card-text">Implementing tts using NVdia TacoTron-2 model on LJspeech dataset</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_speech" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">Chat with PDF (CLI)</h2>
                        <p class="abt_card-text">Implementing Llama model on PDF data and using LLM for question answering. Works on CLI</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/llama" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">Chat with PDF (Web)</h2>
                        <p class="abt_card-text">Implementing Llama model on PDF data and using LLM for question answering. Works on Web </p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">Chat with CSV (API)</h2>
                        <p class="abt_card-text">Question answering with csv using OpenAi API key</p>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="abt_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="abt_card-image"/> */}
                    <div class="abt_card-content" >
                        <h2 class="abt_card-title">Gemini chatbot</h2>
                        <p class="abt_card-text">Used Astro framework and gemini api for chatbot, live using vercel</p>
                        <a href="https://ai-chat-app-rho-ten.vercel.app/" target="_blank"><img src={web} alt="hi" /></a>
                        <a href="https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Dl;