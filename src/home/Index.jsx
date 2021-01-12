import React from 'react';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    console.log(window.location.search)

    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <a href="https://www.amazon.com/ap/oa?client_id=amzn1.application-oa2-client.f49c5594720b41eca785d16f8ef75453&scope=alexa%3A%3Askills%3Aaccount_linking&response_type=code&redirect_uri=https%3A%2F%2Fmaster.decusamylo4eo.amplifyapp.com%2Faccount%2Flogin&state=awefwaefasdfasdfa">Add Omni to Alexa!</a>
            </div>
        </div>
    );
}

export { Home };
