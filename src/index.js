import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store, { persistor, history } from './store';
import App from "./components/app";
import { PersistGate } from 'redux-persist/integration/react'

//firebase Authh
function Root() {
    // useEffect(() => {
    //     const layout = localStorage.getItem('layout_version')
    //     const color = localStorage.getItem('color')
    //     document.body.classList.add(layout);
    //     document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);
    // }, []);
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        {/*<ScrollContext>*/}
                        <Switch>
                            <Fragment>
                                <App/>
                            </Fragment>
                        </Switch>
                        {/*</ScrollContext>*/}
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
