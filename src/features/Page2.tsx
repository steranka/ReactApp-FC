import React from 'react';

let renderCount = 0;

function Page2(props: any) {
    renderCount++;
    let msg = `Page2 [render ${renderCount} props= ${JSON.stringify(props)}`;
    console.log(msg);


    return (
        <div className="Page2">
            This is the Page2 component<br/>
            {msg}
        </div>
    );
}

export default Page2;
