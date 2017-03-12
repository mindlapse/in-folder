# in-folder (a micropackage)
Temporarily change directories to run a callback

  [![NPM Version][npm-image]][npm-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  

```javascript
let inside = require('in-folder')

let showFolder = () => console.log("Folder: " + process.pwd())

showFolder()
inside("lib", showFolder)
showFolder()

```

If the current working directory was '/var', and '/var/lib' existed, then the output would be:
```
Folder: /var
Folder: /var/lib
Folder: /var
```

## Notes
* Promises, if returned within the callback, will be resolved and returned by in-folder.
* Supports relative and absolute paths
* Uses [process.chdir](https://nodejs.org/api/process.html#process_process_chdir_directory) to change folders

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/in-folder.svg?label=stable
[npm-url]: https://npmjs.org/package/in-folder
[downloads-image]: https://img.shields.io/npm/dm/in-folder.svg
[downloads-url]: https://npmjs.org/package/in-folder
[travis-image]: https://img.shields.io/travis/mindlapse/in-folder/master.svg?label=linux
[travis-url]: https://travis-ci.org/mindlapse/in-folder
[appveyor-image]: https://img.shields.io/appveyor/ci/mindlapse/in-folder/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/mindlapse/in-folder
[coveralls-image]: https://img.shields.io/coveralls/mindlapse/in-folder/master.svg
[coveralls-url]: https://coveralls.io/r/mindlapse/in-folder?branch=master
