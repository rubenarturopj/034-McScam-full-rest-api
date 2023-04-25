En este ejemplo lo que hicimos en la clase 9 fue finalmente crear un servidor capaz de manipular una base de datos con insomnia.Fue la cosa mâs completa que hemos hecho en todo el curso. Lo voy a guardar para futuras referencias.

### Tecnologías usadas:

-   UUID: Universally Unique IDentifier. Crea IDs únicos de 36 caracteres.
-   Router:

Herramientas de desarrollador:

-   INSOMNIA - para hacer los requests
-   Nodemon: to restart our server automatically every time we make changes.

## Instalation

1. Clone or download zip.
2. Open it with VSCode and in the terimal run `npm i` to install all packages.
3. To run it, type: `npm run dev`

# instrucciones para crear un servidor

1. en la terminal escribe `npm init -y` para crear un `package.json` y un `package-lock.json`.

    ```sh
    npm init -y
    ```

2. ve al `package.json` y en `"scripts"` agrega `"dev": "nodemon server.js"`.

3. En la terminal escribre `npm i express nodemon` para instalar Express y Nodemon (Express es una API (framework) que sirve para crear servidores; Nodemon es una herramienta que nos permite hacerle cambios a nuestro servidor sin la necesidad de detenerlo y reiniciarlo cada vez que editemos algo).

    ```sh
    npm i express nodemon
    ```

4. Crea el archivo para el servidor bajo el nombre establecido en el paso 2. En este caso es `"server.js"`.

5. Crea el archivo `.gitignore` y ponle dentro `node_modules`.

6. Vuelve al archivo del servidor (server.js) y pon dentro lo básico para montar el servidor:

    ```sh
    const express = require("express");
    const app = express();
    app.listen(3333, () => { console.log("Listening on port 3333");});
    ```

7. De aquí en adelante puedes poner los middlewares o route handlers que quieras abajo de las constantes declaradas (que deben ir siempre hasta arriba) y arriba del la función que hace que el servidor escuche y reciba.

8. para correr nodemon tienes que poner en la terminal `npm run dev`.
    ```sh
    npm run dev
    ```

# Para importar y exportar datos de un archivo a otro en vscode

## Para exportar datos de un archivo

En el archivo en donde están los datos que quiero exportar:

Pongo mis datos en una constante, por ejemplo: `const nombreDeMiVariable = valor`.

(Abajo al final de mi archivo js) pongo `module.exports = nombreDeMiVariable`.

Ejemplo concreto:

```sh
const users = {}
module.exports = users
```

## Para importar datos desde otro archivo (continuación)

En el archivo en donde quiero importar los datos anteriormente exportados:

Arriba en mi archivo js pongo
`const nombreDeMiVariablePorImportar = require("./direcciónDelArchivoDondeEstáMiVariable")`

Ejemplo concreto:

```sh
const usersDatabase = require("./usersDatabase")
```

A partir de este momento ya puedo usar esa variable con la información contenida

# Para crear IDs únicos

UUID Universally unique identifier

Para no usar `Math.floor(Math.random() * 1000)` en casos donde hay que generar, por ejemplo, ID aleatorios. Vamos a la terminal e instalamos UUID:

```sh
npm i uuid
```

A partir de este momento ya podemos usar uuid. Para ello, en cada archivo en el que vayamos a usar uuid tenemos que declararlo arriba de la siguiente manera:

```sh
const uuid = require("uuid").v4
```

Y cada vez que lo vaya a usar simplemente lo invoco de la siguiente forma: `uuid()`

Por ejemplo, si quiero que mi ID tenga un número aleatorio, pongo: `id = uuid();`
