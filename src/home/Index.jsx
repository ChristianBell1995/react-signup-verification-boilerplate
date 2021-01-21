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
            <div className="container text-center">
                <h1>Connect your Alexa to Omni</h1>
                <br />
                <p><strong>Step 1</strong><br /> Connected your Amazon Alexa account to Omni</p>
                <a className="btn btn-primary text-white" href={amazonUrls.amazonUrls.alexa_app_url}>Connect</a>
                <br />
                <br />
                <hr />
                <p><strong>Step 2</strong><br /> Setup our custom routines</p>
                <br />
                <a className="btn btn-primary  text-white" href={amazonUrls.amazonUrls.morning_routine}>Add morning routine</a>
                <br />
                <br />
                <a className="btn btn-primary  text-white" href={amazonUrls.amazonUrls.evening_routine}>Add evening routine</a>
            </div>
        </div>
    );
}

export { Home };
