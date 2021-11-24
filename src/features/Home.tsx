import React from 'react';


function Home() {
    return (
        <div className="Home">
            This is the Home page component.<br/>
            Click on Page1 link to go to page 1.<br/>
            On that page (page1) there will be a component whos state information is stored in the apps state (aka React.Context).
            Another instance of that component will appear on page2 but since it uses the same state it should have the same values
            as displayed on page 1.
        </div>
    );
}

export default Home;
