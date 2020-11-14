
## Setup
All development enviroments require initial configuration. Before we get started with the actual programming we have to get past some setup chores.

In this part of the documntation we will:
1. create an React Native application using Expo CLI
2. set up Application State using Readux
3. configure the testing framwork


### Part 1 - Application structure
```
$ yarn global add expo-cli
```

Try the Expo CLI in yourterminal by simply typing `expo`and hitting enter. You should get a list of expo commands available in the cli tool. If you don't, you will have to reconfigure your `yarn` installation or use `npm global` instead (see the "Toubleshooting" section of this documntation).

Once the command has executed and all dependecies have been installed, this should result in th following output:

```
success Installed "expo-cli@3.28.5" with binaries:
      - expo
      - expo-cli
✨  Done in XX.XX.
```

The version number of the installed application may differ on your system, of course.

Let's use the Expo CLI to scaffold a React Native application. W do that by using the `expo init` command. We will be using a minimal template and NOT use Typescript in this example.

```
$ expo init --template blank rn_detox_redux
```
Once the scaffolder is done with creating the app and installing th dependencies (it might take a while dependent on your computer's capacity and network connection speed), `cd` in into the newly created folder. Now, you can start your application in the phone simulator of your choice. When writing this documentatio, I was on an OSX based machine, so I will use the iPhone simulator.

Just issue the following command in your terminal:
```
$ yarn ios
```
This starts the Metro bundler, essentially a HTTP server that compiles our code with Babel to target the latest JavaScript features.
You will will notice that a nw browser window opens, and after a sshort while, once your new application has compiled, a phone simulator will appear and ventually display the app. All of this might take a while as there are many processes happening at the same time.

![](../documentation/assets/01_browser_expo_runner.png)

**(Note: You can stop the runner with Control + C kys on a Mac)**
The application that appears has only one view with som placeholder text in the center.

![](assets/01_simulator.png)

The text on the view tells us to “Open up App.js to start working on your app!. So let's take a look at the code in our IDE (I'm using VSCode in this example). If you have your VSCode terminal command nabld, you can open the project directly from your terminal rompt. Otherwise, you will need to navigate to the project.

```
$ code .
```
![](assets/01_vscode_screen.png)

Change some text and run see them appear on the viw in the simulator. You can always reload the app (and perform other actions that we will cover later on in this documentation) by accessing the Control Panel in your xpo app. Press Control Command Z on your keyboard to access the controls and klick on 'Reload':

![](assets/01_simulator_with_commands_panel.png)

### JSX support
I like to name my components with th `.jsx` suffix. In order for that to work, we need to modify Metro configuration and tell it to look for **both** `.js` files as well as `.jsx`. This is pretty straight-forward.

Create a file named `metro.config.json` in your projects root folder. Add the following configuration:

```js
module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js']
  }
};
```
Now, you can **rename** `App.js` to `App.jsx` and restart the application server for it to take effect.

## Part 2 -  Application state

We want to manage the state of our application using Redux. For that to happen, we need to take control of the application's configuration in a way that differs a bit from what the scaffolded app gives us. So, more configuration...

We will also chagne the application structure a bit, to better suite our needs. First of all, we want to create a new file in the projects root folder and name it `index.js`. This file need to have the following content:

```js
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
```

(We will get back to this file and modify it's content in a short while.)

We also need to modify the `"main"` key in our `package.json` to point to that `index.js` file (this key already exists, so this is a **change** not an **addition**):

```json
"main": "index.js",
```
Make sure to restart your application server and check if everything is working at this stage. You don't want to  move on before you know that you are in a good state.

Furthermore, we want to organize our code in some subfolders. We might as well create them now. Create folders named `components`, `modules` and `state` in your projets root folder. In the two first folders, we only want to add a hidded file named `.girkeep` (this file is used to Git that it should track the folder even if it is empty), but in the `state` folder we want to create two subdirectories: `store` and `reducers`

 The structure should look like this once you are done:


```
├── App.jsx
├── assets
├── components
├── modules
└── state
    ├── reducers
    └── store
```

Okay, naw that we have these chores behind us, we can move on with adding and configuring Redux. We will add two libraries to our application. `redux` and `react-redux`.

```
$ yarn add redux react-redux
```

#### Initial state
Let’s start with the initial state. For demonstration purposes, we want to set an application name in our state and display it on our view. We can do that by setting an initial state that we will place in a separate file in the `state/store` folder:

```js
// /state/store/initialState.js
const initialState = {
  appTitle: 'Mobile Weather'
}
export default initialState
```

#### The Reducer
In Redux, state is managed by reducer functions. As the next step, we will create a simple reducer that will load the initial state and return it to whoever asks for/subscribes to it:

```js
// /state/reducers/rootReducer.js
import initialState from '../store/initialState'

const rootReducer = (state = initialState) => {
  return state
}
export default rootReducer
```

#### The Global Store
And we will set up and configure the global store object:

```js
// src/state/store/configureStore.js
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore
```

#### Connecting the Redux parts with the app
As the next step, we need to connect our application to the Redux store. We will do that in our applications main entry point (`index.js`) by importing the store configuration (from `state/store/configureStore.js`) and making use of the `Provider` component from the `react-redux`library we added before. The `Provider` component makes the Redux store available to any nested components. Please note the imports and the usage of the `React` library, `Provider` and `configureStore()` in the code below:

```js
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore';
import { registerRootComponent } from 'expo';

import App from './App';

const store = configureStore();

const ConnctedApp = () => <Provider store={store}><App /></Provider>

registerRootComponent(ConnctedApp);
```

Please note how we pass in the `store` object to the `<Provider>` component as a propery (`props`) and use it as a wrapper around the `<App>` component. Also, please note that we **change** what componnt will become th root component of tha application - `registerRootComponent(App)` was changed to `registerRootComponent(ConnctedApp)`.

#### Use state in a component

If we move over to our App component (`App.jsx`) we can make use of the `useSelector` hook and subscribe to the value `appTitle` that we added to the applications state.

Please note that the code example below anly reflects the neccessary **additions** and **changes**. As always, you have to make sure that you keep the relevant code that we choose to omit in code examples/snippets of this documentation.

```js
// omitted code...
import { useSelector } from "react-redux";

const App = () => {
  const appTitle = useSelector(state => state.appTitle) // get the value from application state
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```
If you reload your application in the simulator, you should sew the value you added to the `appTitle` key in the `initialState` displayed on the view.

![](assets/01_simulator_app_title.png)

### Part 3 - Testing with Detox

