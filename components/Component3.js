import React from "react";

const Component3 = () => {
    return (
        <div className="component3" align="center">
            <h2 className="hdw">Abstract</h2>

            <p className="hdw-para">
                Phishing assaults are becoming more common as the number of web users grows. To properly respond to
                various phishing assaults, a thorough understanding of phishing attacks is required, as are suitable
                response tactics. Furthermore, the growing number of phishing websites has made individuals and
                businesses all over the world more vulnerable to numerous assaults. As a result, stronger cyber defence
                necessitates more efficient phishing detection. As a result, in this study, we provide a deep
                learning-based solution for detecting phishing sites with excellent accuracy. The suggested method
                employs three algorithms, Decision Tree, Random Forest, and Multilayer Perceptron, to determine which
                model has the greatest accuracy, which is then utilized for classification to separate real sites from
                phishing ones. We test the models’ using data from 5000 real and 5000 phishing websites. Based on
                extensive testing, our Multilayer Perceptron-based models proven to be extremely efficient at detecting
                unknown phishing sites. Furthermore, the Multilayer Perceptron-based technique outperformed traditional
                and comparative machine learning classifiers on the same dataset, achieving a phishing detection rate of
                99.78% with an accuracy score of 0.998. This project's algorithms outperform the current state of the
                art in deep learning-based phishing website identification.
            </p>

            <h2 className="hdw">Conclusion</h2>

            <p className="hdw-para">
                In this study, we examine the issue of website phishing using each of the three models—Decision Tree,
                Random Forest, and Multilayer Perceptron. These three models had relatively disparate results, but they
                all had high accuracy ratings, making them ideal for use in phishing detection. Long tests are performed
                on a benchmarked dataset of 5000 webpages from legitimate websites and 5000 webpages from phishing
                websites, respectively. For classification, decision trees, random forests, and multilayer perceptron
                classifiers are used in this thesis. Our various approaches proved their validity by delivering accuracy
                of (99.72%), (99.74%), and (99.78%), respectively, making them far more successful at detecting phishing
                websites. Furthermore, utilizing only 18 characteristics based on the length-based features, count-based
                features, and binary features of URLs, our technique produced an accuracy of greater than 99.70%. So
                that URL properties may be easily extracted We provided the results of our examination of our technique
                using multiple metrics, as well as detailed comparison between our method and other phishing detection
                methods that have been published in the literature. To demonstrate the shortcomings of using URL
                features such as URL lengths that appear to give various errors in classifying phishing and legitimate
                websites, we used a variety of Machine Learning solutions that can automatically analyse incoming
                malicious URLs and classify the links on their own rather than placing humans as the last line of
                defence. Furthermore, the best machine learning algorithm was preserved and may be utilized in online
                browsers, search engines, social networking platforms, and so on, or by the user directly to detect
                phishing website domains.
            </p>
        </div>
    );
};

export default Component3;
