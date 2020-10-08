import React from 'react';
import './app.css';

const App = () => {


// --- Component Render ---

    return (
        <div className="app__root">
            <div className="app">
                <div className="app__textbox">
                    <span>Coming Soon</span>
                </div>
                <div className="app__bg-img--attribute">
                    <span>Photo by <a href="https://unsplash.com/@karsten_wuerth?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Karsten Würth</a> on <a href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </div>
            </div>
        </div>
    )
};
export default App;
