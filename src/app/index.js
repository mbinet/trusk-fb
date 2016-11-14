import React from "react";
import { render } from "react-dom";
import {Root} from "./components/Root";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends  React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <h1>Trusk Ratings</h1>
                    <hr />
                    <br />
                    <Root/>
                </div>
            </MuiThemeProvider>
        )
    }
}

render(<App/>, window.document.getElementById("app"));