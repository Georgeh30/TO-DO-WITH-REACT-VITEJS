# PASOS PARA CONFIGURAR EL PROYECTO COMPLETO PARA QUE FUNCIONE EN SERVIDOR APACHE PHP
## Para un proyecto ReactJS:

#### 1. Abrir el archivo package.json en la raíz del proyecto ReactJS.
#### 2. Agregar la siguiente línea dentro del objeto de configuración:
    "private": true,
    "homepage": "/NOMBRE_DEL_PROYECTO/build", // LINEA QUE SE DEBE AGREGAR
#### 3. Guardar los cambios en package.json.
#### 4. Abrir la terminal o línea de comandos y navegar hasta la raíz del proyecto.
#### 5. Ejecutar el siguiente comando para construir el proyecto:
    npm run build
#### 6. Después de que se complete la construcción, se creará una carpeta llamada "build" en la raíz del proyecto.
#### 7. Copiar el contenido de la carpeta "build" a la carpeta "htdocs" de la instalación de XAMPP.
#### 8. En la carpeta raíz del proyecto, crear un archivo llamado ".htaccess" (si no existe) y agregar el siguiente contenido:
    RewriteEngine On
    RewriteRule ^$ build/ [L]
#### 9. Guardar el archivo ".htaccess".
#### 10. Iniciar el servidor de Apache en XAMPP.
#### 11. Abrir el navegador web y acceder a la URL http://localhost/NOMBRE_DEL_PROYECTO/. El proyecto ReactJS debería cargarse correctamente sin necesidad de agregar "build" en la URL.

## Para un proyecto ViteJS:

#### 1.Abrir el archivo vite.config.js en la raíz del proyecto ViteJS.
#### 2. Agregar la siguiente opción de configuración dentro del objeto export default:
    export default defineConfig({
        // Otras opciones de configuración
        
        base: '/NOMBRE_DEL_PROYECTO/dist'
    })
    
#### 3. Guardar los cambios en vite.config.js.
#### 4. Abrir la terminal o línea de comandos y navegar hasta la raíz del proyecto.
#### 5. Ejecutar el siguiente comando para construir el proyecto:
    npm run build
#### 6. Después de que se complete la construcción, se creará una carpeta llamada "dist" en la raíz del proyecto.
#### 7. Copiar el contenido de la carpeta "dist" a la carpeta "htdocs" de la instalación de XAMPP.
#### 8. En la carpeta raíz del proyecto, crear un archivo llamado ".htaccess" (si no existe) y agregar el siguiente contenido:
    RewriteEngine On
    RewriteRule ^$ dist/ [L]
#### 9. Guardar el archivo ".htaccess".
#### 10. Iniciar el servidor de Apache en XAMPP.
#### 11. Abrir el navegador web y acceder a la URL http://localhost/NOMBRE_DEL_PROYECTO/. El proyecto ViteJS debería cargarse correctamente sin necesidad de agregar "dist" en la URL.


### NOTA: AL SUBIR EL PROYECTO A PRODUCCION O EN EL MISMO LOCAL, AL MOMENTO DE CONSTRUIR EL PROYECTO, NO ES NECESARIO SUBIR AL SERVIDOR APACHE PHP TODO EL PROYECTO
### SOLO SE NECESITA SUBIR EL CONTENIDO DE LA CARPETA CONSTRUIDA, YA SEA "build" o "dist", Y SOLO CON CREAR UNA CARPETA CON EL NOMBRE DEL PROYECTO Y METER EL CONTENIDO EN EL,
### SOLO ESA CARPETA NUEVA ES LA QUE SE SUBE Y FUNCIONARA DE IGUAL FORMA.