import React, { useEffect, useState } from 'react';

const Responsible = () => {
    const [respons, setRespons] = useState([]);
    useEffect(() => {
        fetch('responsible.json')
            .then(res => res.json())
            .then(data => setRespons(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                respons.map(r => <div className="card w-80 ">
                    <figure className="px-10 pt-10">
                        <img src={r.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{r.resName}</h2>
                        <p className='text-left'>{r.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Responsible;