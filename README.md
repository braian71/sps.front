# Proyecto React

Funcionalidades

- **Inicio de sesión**: Se puede iniciar sesión con el siguiente usuario:

    ```json
    {
        "name": "admin",
        "email": "admin@spsgroup.com.br",
        "type": "admin",
        "password": "1234"
    }
    ```

- **CRUD de usuarios**: Permite crear, leer, actualizar y eliminar usuarios.

- **Validación de token de autenticación**: La aplicación verifica el token de autenticación para asegurar que las peticiones sean realizadas por usuarios válidos.

## Librerías

- **Tailwind CSS**: Para el diseño de la interfaz
- **Axios**: Para realizar solicitudes HTTP.
- **React Hook Form**: Para el manejo de formularios y validaciones.

## Estructura de Archivos

```
├── .env
├── .gitignore
├── dist/
│   ├── output.css
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── vite.svg
├── README.md
├── src/
│   ├── assets/
│   │   ├── react.svg
│   ├── common/
│   │   ├── components/
│   │   │   ├── index.js
│   │   │   ├── loader.component.jsx
│   │   ├── helpers/
│   │   │   ├── endpoints.helper.js
│   │   │   ├── index.js
│   │   ├── hooks/
│   │   │   ├── index.js
│   │   │   ├── use-auth.jsx
│   │   │   ├── use-axios.jsx
│   │   ├── schemas/
│   │   │   ├── index.js
│   │   │   ├── login.schema.js
│   │   │   ├── user.schema.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── login.page.jsx
│   │   ├── not-found.page.jsx
│   │   ├── user-detail.page.jsx
│   │   ├── users.page.jsx
│   ├── routes/
│   │   ├── app.router.jsx
│   │   ├── private.router.jsx
├── tailwind.config.js
├── vite.config.js
```


## Variables de entorno

VITE_API_URL=http://localhost:5000/api

## Capturas

![image](https://github.com/user-attachments/assets/dbee5ac5-8be5-4ef4-8f91-a466454b7b49)

![image](https://github.com/user-attachments/assets/fcbba18a-52d2-4c20-b784-bf24f50a5da4)

![image](https://github.com/user-attachments/assets/bd72b3d8-f986-4e81-a156-60ffdc32212e)
