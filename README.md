  [![Windows Build][appveyor-image]][appveyor-url]

# in-folder (a micropackage)
Temporarily switch to a folder and run a callback there


```javascript

import inside from 'in-folder'

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

[appveyor-image]: https://img.shields.io/appveyor/ci/mindlapse/in-folder/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/mindlapse/in-folder
