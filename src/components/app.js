import ReactDOM from "react-dom";
import React from 'react';
import { Signer } from '@waves/signer';
import { ProviderKeeper } from '@waves/provider-keeper';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        const signer = new Signer({
            // Specify URL of the node on Testnet
            NODE_URL: 'https://nodes-testnet.wavesnodes.com'
        });
        const authData = { data: "Sign"}
        const keeper = new ProviderKeeper(authData);
        signer.setProvider(keeper);
        if (WavesKeeper) {
            WavesKeeper.auth(authData)
            .then(auth => {
                console.log( auth );
                /*... processing data */
            }).catch(error => {
                console.error( error );
                /*... processing errors */
            })
        } else {
            alert("Please check your WavesKeeper installation.");
        }
    }
    render() {
        return (
            <div className="container">
    		    <input className="btn btn-primary" type="submit" value="Chocolate Factory" onClick={this.authFunc}/>
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}
