## Yarn Global

https://stackoverflow.com/a/53879534/1354994

Check your Yarn `bin` folder location:

```
$ yarn global bin
```
If the `bin` foldr location is prefixed with anothr folder, you will have to modify the Yarn configuration by adding a key with that prfix.First chck if the key is already set:
```
$ yarn config get prefix
```
If you get anything, make sure it corresponds with th `bin` seetting you got above. If not, modity it like this for example:

```
$ yarn config set prefix ~/.yarn
```

Next, you need to configure your Bash settings:

```
$ code ~/.bash_profile // use nano or vim and edit your `.bashrc` if you prefer
```


Add the following to th profile:
```
export PATH="$PATH:`yarn global bin`"
```

Finally you need to `source` th settings in order for them to take effect (or restart your terminal)

```
$ source ~/.bash_profile // or `.bashrc`
```