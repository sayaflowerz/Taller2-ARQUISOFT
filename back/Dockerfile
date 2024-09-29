# Usar una imagen base de Java
FROM openjdk:17-jdk-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo JAR generado por Maven/Gradle al contenedor
COPY target/back-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 9090
# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
