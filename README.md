# brun
Run a series of commands using brace expansion.

## Install
```
npm install -g brun
```

## Use
Example:
```
brun 'git {add -a,commit -m "done",push}'
```
will run (in series):

0. `git add -a`
0. `git commit -m "done"`
0. `git push`

as long as each command in the sequence executes successfully.
