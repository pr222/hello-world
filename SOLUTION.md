# LÖSNING

```js
// src/app.js

import * as hello from './hello.js'

const greeting = hello.sayHello()

console.log(greeting)
```

En funktion, som `sayHello` i modulen `src/hello.js`, kan returnera ett värde som resultat av anropet av funktionen. I detta fall anropas funktionen från `src/app.js` (även `test/hello.test.js` anropar funktionen men det behöver vi inte bry oss om) och det värde (strängen `Hello, World!`), som funktionen `sayHello` returnerar skrivs ut i terminalfönstret.

```js
// src/hello.js

export function sayHello () {
  return 'Hello, World!'
}
```

För att returnera ett bestämt värde från en funktion används det reserverade ordet `return`. En `return`-sats kan placeras var som helst inuti en funktion, det vill säga mellan klammerparenteserna. När exekveringen når den avslutas funktionen och värdet returneras till den anropande koden (till konstanten `greeting` i koden överst).
