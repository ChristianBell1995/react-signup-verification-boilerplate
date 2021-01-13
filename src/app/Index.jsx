import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert } from '@/_components';
import { Home } from '@/home';
import { Profile } from '@/profile';
import { Admin } from '@/admin';
import { Account } from '@/account';

function App() {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});
    const [amazonUrls, setAmazonUrls] = useState({});
    console.log("Log search from APP")
    console.log(window.location.search)
    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);
    useEffect(() => {
      const urls = accountService.fetchAmazonUrls()
      setAmazonUrls(urls)
    }, []);

    return (
        <div className={'app-container' + (user && ' bg-light')}>
            <Nav />
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/">
                  <Home amazonUrls={amazonUrls} />
                </Route>
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                <Route path="/account" component={Account} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export { App };
