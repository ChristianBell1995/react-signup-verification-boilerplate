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

    const handleSubmit = (event) => {
      const formData = new FormData(event.target);
      event.preventDefault();
      console.log(formData.entries())
      for (let [key, value] of formData.entries()) {
        console.log({token: value})
          accountService.triggerAlexaEvent({token: value})
            .then((res) => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
                alertService.error(error);
            });
      }
    }

    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi Christian!</h1>
                <p>You're logged in with React & JWT!!</p>
                <br />
                <a href={amazonUrls.amazonUrls.alexa_app_url}> Alexa Installed - add omni to alexa!</a>
                <br />
                <br />
                <a href={amazonUrls.amazonUrls.lwa_fallback_url}>Alexa not installed - Add Omni to Alexa!</a>
                <br />
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                  <input type="text" name="token" placeholder="Token"/>
                  <input type="submit" value="Trigger Alexa!" />
                </form>
            </div>
        </div>
    );
}

export { Home };
