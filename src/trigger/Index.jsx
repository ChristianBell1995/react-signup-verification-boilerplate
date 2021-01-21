import React from 'react';
import querystring from 'querystring';


import { accountService } from '@/_services';

function Trigger(amazonUrls) {
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
                <form onSubmit={handleSubmit}>
                  <input type="text" name="token" placeholder="Token"/>
                  <input type="text" name="endpointId" placeholder="endpointId"/>
                  <input type="submit" value="Trigger Alexa!" />
                </form>
            </div>
        </div>
    );
}

export { Trigger };
