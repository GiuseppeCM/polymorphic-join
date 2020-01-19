To reproduce the bug:
-login
-try to add a widget in home
-click browse

in browser console:

```
manager-modal.js:168 Uncaught TypeError: Cannot read property 'length' of undefined
    at Object.self.reflectBatchOperation (manager-modal.js:168)
    at Object.self.reflectChoiceCount (manager-modal.js:919)
    at self.reflectChoicesInCheckboxes (manager-modal.js:881)
    at Object.manager.reflectChoicesInCheckboxes (chooser-modal.js:124)
    at chooser-modal.js:98
    at arrayEach (lodash.js:1463)
    at Function.<anonymous> (lodash.js:3525)
    at Object.self.reflectChoicesInCheckboxes [as change] (chooser-modal.js:97)
    at Object.self.onChange (chooser.js:421)
    at chooser.js:187
```
	
	