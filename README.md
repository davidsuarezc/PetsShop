# PetsShop

Descripción del proyecto:
Backend en Node.js y express de tienda de mascotas. Usando jsonwebtoken para la seguridad y sequelize como ORM para la base de datos.

- Crear fichero .env en la raíz del proyecto.
- Definir las variables de entorno necesarias en el mismo y sus valores.
  ej: 
  
    PORT=4000
    
    JWT_KEY=hsdG*Gev112_jndjeGF
    
    DB_NAME=shopDb

    DB_HOST=localhost

    DB_DIALECT=mysql

    DB_USER=root

    DB_PASSWD=root

- Crear la bd con el mismo nombre definido en DB_NAME

- Iniciar el servidor en modo development

```sh
cd PetsShop
npm run dev
```

En el fichero PRINCIPALES ENDPOINTS.txt como su nombre lo indica, se pueden encontrar los endpoints de la app, así como sus verbos HTTP.
