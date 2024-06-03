import React from 'react';

const Recommendation = ({ recommendations }) => {
    return (
        <section className="recommendations">
            <h2>Personalized Recommendations</h2>
            <ul id="recommendation-list">
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </section>
    );
};

export default Recommendation;
