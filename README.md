# nodered-ha-utils

## What is the purpose of this package?
To provide easy means for sharing and reusing code snippets and functionalities common to Node Red & Home Assistant for Smart Home use case.

## Adding this package to your Node Red installation

* Execute the following to install the package, while in the directory that contains `settings.json`:
  ```shell
  npm i nodered-ha-utils@latest
  ```

  If you are running Node Red in Docker container, first login into it before installing, using:
  ```shell
  docker exec -it <NodeRedContinerName> /bin/bash
  ```
  Use `docker ps` to find the container name.

* Edit your `settings.json` file in Node Red directory
* Find the key `functionGlobalContext` and add this package:
  ```json
      functionGlobalContext: {
          // ...
          myUtils:require("nodered-ha-utils")
          // ...
      },
  ```
* Restart Node Red

## Using the package
In any `Function` node, simply import the function you want to use, or the entire package:
```javascript
// This will import the entire package
const myUtils = require('myUtils');
// Use it like this:
const onEntities = myUtils.getOnEntitiesInRoom(roomStateObj, keys);
```
```javascript
// Or, you can import only the util you need
const { getOnEntitiesInRoom } = require('myUtils');
// Use it like this:
const onEntities = getOnEntitiesInRoom(roomStateObj, keys);
```

## Contributing
So, you want to contribute your own utils? So glad to hear!
* Please see the [contribution guide](https://github.com/jsBlackBelt/nodered-ha-utils/blob/main/CONTRIBUTING.md) for guidelines.
* Please fork the repository, add your own code and submit a PR for review.
