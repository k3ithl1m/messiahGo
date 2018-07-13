import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";
import { Font } from "expo";
import { persistStore, autoRehydrate } from "redux-persist";

//import logger from "redux-logger";

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(
      ReduxThunk
      //  logger
    ),
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage });

class Main extends Component {
  componentDidMount() {
    Font.loadAsync({
      centuryGothic: require("./Assets/Fonts/CenturyGothic.ttf")
    });
  }

  render() {
    //get the time value when the app starts with this
    // call back
    return (
      <Provider store={store}>
        <Router />
        {/* <Profile /> */}
      </Provider>
    );
  }
}

export default Main;
