import "./Ml.css"
import github from "../../icons/github.svg";
function Ml() {
    return (
        <div className="ml_body">
            <div className="ml_heading">
                Machine Learning Projects
            </div>

            <div class="ml_container">
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">K-NN From Scratch</h2>
                        <p class="ml_card-text">Classifying HandWirtten Digit MNIST dataset using KNN implemented using pandas (From scratch)</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_1" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Naive Bayes From Scratch</h2>
                        <p class="ml_card-text">Classifying satellite images in River and Non River class using NaiveBayes</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_2" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Perceptron </h2>
                        <p class="ml_card-text">Implementing Preceptron Algorithm form scratch to Fit a line Between two linearly seperable data</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_3" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">K-means From Scratch</h2>
                        <p class="ml_card-text">Implementing K-Means Clustering algo to create classes for Satellite images</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_4" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">MultiDimension Scaling</h2>
                        <p class="ml_card-text">Implementing Multi Dimension Scaling For Visualization of Higher Dimension MNIST HD dataset</p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_5" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Denoising Image</h2>
                        <p class="ml_card-text">Using KPCA(rbf), KPCA(wavelet) and PCA to denoise Images, by using Patch based Approach On high quality images </p>
                        <a href="https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/ML_project/work" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Hous Price Prediction</h2>
                        <p class="ml_card-text">Using Regression models to predict house prices with more than 40 features. </p>
                        <a href="https://github.com/biswajit-github-2022/PRODIGY_ML_01" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Mall Customer Segregation</h2>
                        <p class="ml_card-text">Using K-means Algorithm to segregate mall customers . </p>
                        <a href="https://github.com/biswajit-github-2022/PRODIGY_ML_02" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Cats vs Dogs</h2>
                        <p class="ml_card-text">Classifying Cats and Dogs images using SVM classifier. Then using PCA for visualization </p>
                        <a href="https://github.com/biswajit-github-2022/PRODIGY_ML_03" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                <div class="ml_card" >
                    {/* <img src="image1.jpg" alt="Image 1" class="ml_card-image"/> */}
                    <div class="ml_card-content" >
                        <h2 class="ml_card-title">Hand gesture Detection</h2>
                        <p class="ml_card-text">Using CNN to detect 10 types of handgesture from images . </p>
                        <a href="https://github.com/biswajit-github-2022/PRODIGY_ML_04" target="_blank"><img src={github} alt="hi" /></a>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Ml;