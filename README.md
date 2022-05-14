

# CHAT CLASES VIRTUALES 

## Acerca de

Se requiere brindar una herramienta de chat a las clases virtuales que permita la interacción entre los participantes y el moderador de la clase.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM para correr el proyecto de manera local. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Instrucciones

El proyecto cuenta con dos carpetas: `api` y `client`. Abrir la consola en la ruta de estas carpetas y ejecutar `npm install`. Posteriormente ejecutar `npm start` ( una terminal por cada carpeta )

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `chat`


#### Tecnologías usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Passport

## Instrucciones de uso del proyecto
Para poder ingresar deberas registrarte con un usuario, un nombre y una contraseña, o iniciar sesión si ya estás registrado. El proyecto cuenta con una precarga de 2 usuarios, uno tipo moderador (`usuario = sebas123`, `contraseña = asd12345`) y (`usuario = andres123`, `contraseña = asd12345`) con los que se puede iniciar sesión y poder interactuar en el chat.

## Funcionalidades del proyecto
- Registro e inicio de sesión.
- un participante puede interactuar con los demás participantes.
- Los mensajes del chat indican quién escribió el mensaje y distingue los mensajes del moderador.
- los mensajes del chat se almacenan en una base de datos.

## El proyecto cuenta con los siguientes endopints para consultar los usuarios y los mensajes asociados a ellos:

http://localhost:3001/user  -  http://localhost:3001/user?id=1

http://localhost:3001/message  -  http://localhost:3001/message?id=1





