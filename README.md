# 🌟 **TextVision: Generador de Imágenes a partir de Texto** 🌟

¡Bienvenido a **TextVision**! 🚀 Esta es una aplicación web que utiliza inteligencia artificial para generar imágenes a partir de descripciones textuales. 💭➡️🖼️ Usamos el modelo de **Hugging Face** para transformar tu imaginación en arte visual.

## **¿Qué es TextVision?** 🤔

**TextVision** es una herramienta que permite a los usuarios ingresar un texto descriptivo, y la IA generará una imagen basada en esa descripción. 🌈🎨 Es perfecto para artistas, diseñadores, o cualquier persona que desee crear contenido visual a partir de palabras.

## **Características Principales** 🚀

- **Generación de imágenes a partir de texto**: Transforma cualquier descripción en una imagen.
- **Modelo avanzado de IA**: Utiliza la API de Hugging Face para generar imágenes realistas.
- **Interfaz sencilla y amigable**: Solo ingresa el texto y haz clic en un botón para generar la imagen.
- **Funcionalidad interactiva**: La imagen generada se muestra en la misma página en tiempo real.

## **¿Cómo Funciona?** 🛠️

### **Flujo de Datos (Recibir y Devolver JSON)** 🔄

1. **Envías una solicitud POST** con un texto descriptivo a la API de Hugging Face:
   
   El formato de la solicitud se ve algo así:
   
   ```json
   {
     "inputs": "Un paisaje futurista con árboles de neón y cielos rojos"
   }


2.  **Recibido**  Con texto 
