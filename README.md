# Alerthive

Alerthive es una plataforma web, que gracias al metodo de web-scraping permite la obtencion de las emergencias mas recientes de la cuenta de twitter @bomberostemuco, y mostrar estas emergencias con su informacion de ubicacion, hora, estado, tipo y codigo de emergencia al publico. Con libre acceso, gratuito y seguro.

## Requisitos de Instalacion local

- Node.js (v14 o superior)
- npm (v6 o superior) o Yarn (v1 o superior)

## Configuración

Antes de ejecutar el proyecto, asegúrate de configurar las variables de entorno necesarias. El proyecto utiliza una variable de entorno llamada `DATABASE_URL` para la conexión a la base de datos. Asegúrate de proporcionar el valor correcto para esta variable en el entorno de ejecución.

Esto en un archivo .env.local en la raiz del proyecto.

## Instalación

Sigue los pasos a continuación para instalar las dependencias y ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Alerthive/alerthive-frontend
   ```

2. Entra al repositorio

    ```bash
    cd alerthive-frontend
    ```

3. Instala las dependencias

    ```bash
    npm install
    ```

4. Ejecuta el proyecto

    ```bash
    npm run dev
    ```