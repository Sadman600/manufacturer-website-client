import React from 'react';

const Summary = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal  bg-base-100 shadow-xl w-full my-10">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-manufacturing-artificial-intelligence-robot-element-arm2-5dmanufacturingfactoryartificial-intelligence-png-image_657521.jpg" alt='' />
                        </div>
                    </div>
                </div>
                <div className="stat-title">Accessories Manufactured</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">Accessories Manufactured (2022)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src=" https://avius.com/wp-content/uploads/2019/06/voice-of-employee-illustration-1024x686.png" alt='' />
                        </div>
                    </div>
                </div>
                <div className="stat-title">Our Employee</div>
                <div className="stat-value text-primary">2500</div>
                <div className="stat-desc">Our employee in (2022)</div>
            </div>



            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://thumbs.dreamstime.com/b/map-world-geotags-vector-location-pointers-global-representation-flat-style-international-business-businessman-sitting-163737267.jpg" alt='' />
                        </div>
                    </div>
                </div>
                <div className="stat-title">Global Locations</div>
                <div className="stat-value text-primary">20</div>
                <div className="stat-desc text-error">30 location remaining</div>
            </div>

        </div>
    );
};

export default Summary;