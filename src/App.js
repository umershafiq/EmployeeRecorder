import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
    componentWillMount() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAgm1BdKtJezNjXi-fNt1ZoEKtrjPjY4xU",
            authDomain: "mapp-auth-class.firebaseapp.com",
            databaseURL: "https://mapp-auth-class.firebaseio.com",
            projectId: "mapp-auth-class",
            storageBucket: "mapp-auth-class.appspot.com",
            messagingSenderId: "1016989336345",
            appId: "1:1016989336345:web:a3a240be532aa07c"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
        );
    }
}

export default App;