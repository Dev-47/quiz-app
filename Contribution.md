# Read through before contributing

- Before making changes, fork the repo to account first
- Clone the forked repo to your PC / any other device
- Push commits in minute-readable-reviewable quantity
- Write informative commit messages
- Also write informative messages while sending PRs (Pull Requests)

# Adding / Updating / Fixing a feature

- Before performing these actions, check in with the previous codebase if such thing already exist, if it does, talk to the people who worked on it if you can,
  if the action doesn't exit, create yours and make PR(s)

  > D.R.Y. - Do not Repeat Yourself (and don't repeat other people too 😏)

- When performing any of those actions, you should create a new branch. Branch naming conventions matter too, needs to be informative and not too long.
  Use this recommended pattern

  `<action>-<feature>`

  `action` would be any of `add`, `update`, `fix`, `remove`, and you can suggest or use more actions if necessary
  `feature` would be what you're trying to edit, like if you're try to change the layout of the application, you could say `update-app-layout`,
  `app-layout` is the feature, `update` is the action.

  > K.I.S.S. - Keep It Short and Simple !

# Folder walk-around

```
quiz-app
├── api
├── mobile
├── Contribution.md
├── README.md
└── web

3 directories, 2 files
```

`api` folder is where the backend API lives
`mobile` folder is for the mobile application frontend
`web` folder is for the web application frontend

# * { notice: read !important }

Whatever you do, never edit the code base.
In other words, don't edit the main branch directly, never. This is for the safety of yourself and others.
