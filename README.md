# in-folder (a micropackage)
Temporarily switch to a folder and run a callback there


```

import inside from 'in-folder'

let showFolder = () => console.log("Folder: " + process.pwd())

showFolder()
inside("lib", showFolder)
showFolder()

```

If the current working directory was '/var', and '/var/lib' existed, then the output would be:
```
/var
/var/lib
/var
```
