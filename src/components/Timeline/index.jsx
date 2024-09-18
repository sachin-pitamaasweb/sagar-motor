import React from 'react';
import './style.css';

const Timeline = () => {
    const timelineData = [
        { year: "1999", description: "Started with Highway repair center from Ashok Leyland" },
        { year: "2000", description: "Started BPL Mobile, which later converted to Vodafone Gallery and is still operational" },
        { year: "2005", description: "Started working on Solid Waste Management in association with Vasundhara Prayavaranmitra Bahuuddeshiya Sevabhavi Sanstha" },
        { year: "2011", description: "Bagged authorised dealership of Ashok Leyland" },
        { year: "2014", description: "Started Honda 2 wheeler dealership" },
        { year: "2017", description: "Initiated Solid waste management in Latur" },
        { year: "2024", description: "Processing 11000 Metric Tons of legacy waste per day across India" }
    ];

    return (
        <div className="container">
            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                        <div className="year">{item.year}</div>
                        <div className="description">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
