import "./Ts.css"
import github from "../../icons/github.svg";
import web from "../../icons/web.svg";
function Dl() {
    return (
        <div className="ts_body">
            <div className="ts_heading">
                Time Series Projects
            </div>

            <div class="ts_container">
                <div class="ts_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ts_card-image"/> */}
                    <div class="ts_card-content" >
                        <h2 class="ts_card-title">Wind Speed forecasting</h2>
                        <p class="ts_card-text">Implementing time series model on wind speed data for forecasting</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/Self/Time_series_wind_speed_forecasting" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
}

export default Dl;