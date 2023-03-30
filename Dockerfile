# Imagen base
FROM node:16

# Directorio de trabajo en la imagen
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
COPY app.js ./
COPY static ./static
COPY index.html /app/

# Instalar dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]

# Volumen linkeado a la carpeta static
VOLUME [ "/app/static" ]
