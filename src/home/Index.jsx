import React from 'react';
import querystring from 'querystring';


import { accountService } from '@/_services';

function Home(amazonUrls) {
    console.log(amazonUrls)
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
                <a href={amazonUrls.amazonUrls.alexa_app_url}> Alexa Installed - add omni to alexa!</a>
                <br />
                <a href={amazonUrls.amazonUrls.lwa_fallback_url}>Alexa not installed - Add Omni to Alexa!</a>
            </div>
        </div>
    );
}

export { Home };
