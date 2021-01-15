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
      const obj = {}
      for (let [key, value] of formData.entries()) {
        obj[key] = value
      }
      console.log(obj)
      accountService.triggerAlexaEvent(obj)
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
                <br />
                <p>Step one - link omni account to alexa account:</p>
                <a href={amazonUrls.amazonUrls.alexa_app_url}> Alexa Installed - add omni to alexa!</a>
                <br />
                <br />
                <a href={amazonUrls.amazonUrls.lwa_fallback_url}>Alexa not installed - Add Omni to Alexa!</a>
                <br />
                <br />
                <p>Step two - add routine to alexa app:</p>
                <br />
                <a href={amazonUrls.amazonUrls.morning_routine}>Add morning routine (endpointId = 1)</a>
                <br />
                <br />
                <a href={amazonUrls.amazonUrls.evening_routine}>Add evening routine (endpointId = 2)</a>
                <br />
                <br />
                <p>Step three - trigger routine via smart home sensors (This is done by our BE eventually).</p>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="token" placeholder="Token"/>
                  <input type="text" name="endpointId" placeholder="endpointId"/>
                  <input type="submit" value="Trigger Alexa!" />
                </form>
            </div>
        </div>
    );
}

export { Home };
