import React from 'react';

function About() {
    return (
        <div>
            <h2>About</h2>
            <p>
            Routing in React Router allows you to define navigation paths and associate them with specific components.
            WHen a user navigates to a URL, React router matches the URL with the defined routes and renders the associated component.
            Here's a summary of how routing works in React Router:
            <ol>
                <li>The user clicks on a link component or manually enters a URL in the address bar.</li>
                <li>React Router compares the URL to the defined routes in the application.</li>
                <li>If there's a match, React Router renders the corresponding component.</li>
                <li> The rendered component is displayed in the application without a page reload.</li>
                </ol> 
             </p>
        </div>
        );
}

export default About;