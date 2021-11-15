import React from 'react';

let renderCount = 0;

function Home() {
    renderCount++;
    console.log('Home renderCount=' + renderCount);
    return (
        <div className="Home">
            This is the Home page component
        </div>
    );
}

export default Home;
