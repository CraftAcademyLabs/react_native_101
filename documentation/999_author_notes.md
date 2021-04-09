

## Tree

```
tree  -L 2 -I "node_modules|*.js|*.json|*.png|*.lock"
```


### Detox permissions

```js
await reloadApp({
  permissions: { location: 'inuse', notifications: 'YES' },
});
```

```
calendar=YES|NO|unset
camera=YES|NO|unset
contacts=YES|NO|unset
health=YES|NO|unset (iOS 12.0 and above)
homekit=YES|NO|unset
location=always|inuse|never|unset
medialibrary=YES|NO|unset
microphone=YES|NO|unset
motion=YES|NO|unset
notifications=YES|NO|unset
photos=YES|NO|unset
reminders=YES|NO|unset
siri=YES|NO|unset
speech=YES|NO|unset
faceid=YES|NO|unset
```


### set-simulator-location
This is a simple CLI for easily setting the location of the currently running iOS Simulator.

Usage
Set a specific latitude and longitude:
```
$ set-simulator-location -c 37.7765 -122.3918
```
Or using place search:
```
$ set-simulator-location -q Lyft HQ San Francisco
```

For Android Studio, we might need to set this up: https://stackoverflow.com/a/2279827/1354994
#### Installation
```
$ brew install lyft/formulae/set-simulator-location
```
#### Usage
Allow location service using `xrun`
```
exec('xcrun simctl privacy booted grant location-always host.exp.Exponent')
```

Set the location by address:
```
exec('set-simulator-location -q Gothenburg, Sweden')
```

Set the location by coordinates:
```
exec('set-simulator-location -c 57.7132122 11.96223453')
```
### Detox command
set loglevel if you need to get a better output
```
$ detox test -l "verbose"
```

### Checking if package is installed - WIP
```js
const checkSimulatorLocationPresent = async () => {
  let setSimulatorLocationPresent
  await exec('brew info set-simulator-location').then(r =>{
    let message = /Not installed/
    if (message.test(r.stdout.toString())) {
      console.error('ERROR: ' + r.stdout)
      setSimulatorLocationPresent = false
      throw new Error('You neeed to install the Set Simulator Location package using "brew install set-simulator-location"')
    } else {
      setSimulatorLocationPresent = true;
    }
    console.log(r.stdout.toString())
  })
}
```