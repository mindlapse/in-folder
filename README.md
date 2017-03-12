  [![NPM Version][npm-image]][npm-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]
  
# in-folder (a micropackage)
Temporarily switch to a folder and run a callback there


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
* You can also return promises from within the callback and they will be returned by in-folder.

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
