# Hello, World!

## Uppgift

Komplettera funktionen `sayHello` i filen `src/hello.js`, så att funktionen returnerar strängen `Hello, World!`.

### Filer

Modulerna `src/app.js` och `src/hello.js` samverkar enligt beroendediagrammet nedan. Du ser även `test/hello.test.js` (som du inte ska redigera), vilket är den modul som innehåller enhetstest som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

## ...och glöm inte!

### Spara lokalt och skicka till GitLab

Gjort ändringar i koden, sparat dem lokalt och skickat dem till ditt repositorium på GitLab? Glöm inte att följa guiden [Arbetsgång med en övningsuppgift](#/). Använd `git add`, `git commit` och `git push` regelbundet!

### Kör applikation, tester och kontrollera så kodstandarden följs

#### npm install

Innan du kan köra applikationen, eller dess test, måste du exekvera kommandot `npm install` i terminalfönstret för att installera de paket applikationen är beroende av.

```shell
npm install
```

Exempelutskrift:

```shell
npm notice created a lockfile as package-lock.json. You should commit this file.

added 278 packages from 164 contributors and audited 600 packages in 13.06s

found 0 vulnerabilities
```

#### npm start

För att köra applikationen skriver du kommandot `npm start` i terminalfönstret.

```shell
npm start
```

Exempelutskrift (då uppgiften är löst korrekt):

```shell
> exercise-hello-world@1.0.0 start example/path/exercise-hello-world
> node src/app.js

Hello, World!
```

#### npm test

För att köra applikationens test skriver du kommandot `npm test` i terminalfönstret.

```shell
npm test
```

Exempelutskrift:

```shell
> exercise-hello-world@1.0.0 start example/path/exercise-hello-world
> npx mocha --recursive || exit 0



  sayHello
    return value
      √ sayHello() should return 'Hello, World!'


  1 passing (4ms)
```

Exempelutskrift vid fel enligt tester (den förväntade strängen returneras inte av funktionen `sayHello`).

```shell
> exercise-hello-world@1.0.0 start example/path/exercise-hello-world
> npx mocha --recursive || exit 0



  sayHello
    return value
      1) sayHello() should return 'Hello, World!'


  0 passing (5ms)
  1 failing

  1) sayHello
       return value
         sayHello() should return 'Hello, World!':
     AssertionError: expected 'Hi there' to equal 'Hello, World!'
      at Context.<anonymous> (file:///example/path/exercise-hello-world/test/hello.test.js:19:35)
      at processImmediate (internal/timers.js:456:21)
```

#### npm run lint

För att kontrollera att koden du skrivit följer kodstandarden skriver du kommandot `npm run lint` i terminalfönstret.

```shell
npm run lint
```

Skulle du till exempel indenterat koden fel och råkat skriva ett semikolon på fel plats kan du få följande utskrift:

```shell
> exercise-hello-world@1.0.0 lint example/path/exercise-hello-world
> npx eslint ./src || exit 0


example/path/exercise-hello-world/src/hello.js
  20:1   error  Expected indentation of 2 spaces but found 4  indent
  20:27  error  Extra semicolon                               semi

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```

## Tips

Genom att köra testet, ett så kallat enhetstest, som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstestet...).

Funktioner, metoder, etc. som kan komma till användning beroende hur du väljer att lösa uppgiften:

- [funktionsuttryck](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
