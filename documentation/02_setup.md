
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

We want to manage the state of our application using Redux.
We will add two libraries to our application. `redux` and `react-redux`.

```
$ yarn add redux react-redux
```
