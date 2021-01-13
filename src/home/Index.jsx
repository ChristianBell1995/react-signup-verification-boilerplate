import React from 'react';
import querystring from 'querystring';


import { accountService } from '@/_services';

function Home() {
    console.log(window.location.search)
    if (window.location.search) {
      const obj = querystring.parse(window.location.search)
      console.log(obj)
      console.log(obj)
      accountService.handleLWACallback(obj)
        .then((res) => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
            alertService.error(error);
        });
    }


    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi Christian!</h1>
                <p>You're logged in with React & JWT!!</p>
                <a href="https://www.amazon.com/ap/oa?client_id=amzn1.application-oa2-client.f49c5594720b41eca785d16f8ef75453&scope=alexa%3A%3Askills%3Aaccount_linking&response_type=code&redirect_uri=https%3A%2F%2Fmaster.d3q2w6owoy7qaj.amplifyapp.com&state=awefwaefasdfasdfa">Add Omni to Alexa!</a>
            </div>
        </div>
    );
}

export { Home };
