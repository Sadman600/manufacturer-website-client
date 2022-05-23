import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center content-center mt-24'>
            <div style={{ borderTopColor: "transparent" }}
                className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;