# 📚 JSON-JS - Gestión de Biblioteca de Libros

¡Bienvenido al proyecto **Callbacks and JSON**! 🎉 Una aplicación de consola diseñada para gestionar el inventario de una biblioteca local utilizando las poderosas herramientas de JavaScript: **JSON** y **Callbacks**.

## 🌟 ¿Qué es este proyecto?

Este proyecto simula un sistema de gestión bibliotecaria donde podrás:

- 📖 **Consultar libros** disponibles en el inventario
- ➕ **Agregar nuevos libros** a la colección
- 🔄 **Actualizar disponibilidad** (prestado/disponible)
- 💾 **Simular operaciones de archivo** con callbacks asincrónicos

## 🎯 Objetivo Principal

Crear una aplicación de consola interactiva que demuestre el uso práctico de:

- **JSON**: Para almacenar y estructurar datos de libros
- **Callbacks**: Para manejar operaciones asincrónicas
- **Gestión de datos**: Simulando un sistema de biblioteca real

## 🚀 Funcionalidades

### 1. 📋 Consultar Libros
Visualiza todos los libros almacenados en formato JSON con información detallada de cada ejemplar.

### 2. ➕ Agregar Libros
Permite incorporar nuevos libros a la colección con las siguientes propiedades:
- 📝 **Título**
- ✍️ **Autor**
- 🏷️ **Género**
- ✅ **Estado de disponibilidad**

### 3. 🔄 Actualizar Disponibilidad
Cambia el estado de los libros entre:
- 📚 **Disponible**
- 📤 **Prestado**

### 4. 💾 Simulación de Archivo (Opcional)
Simula operaciones de lectura y escritura usando callbacks, como si interactuaras con un sistema de almacenamiento real.

## 🔧 Tecnologías Utilizadas

- **JavaScript** - Lenguaje principal
- **JSON** - Formato de datos
- **Callbacks** - Manejo de asincronía
- **Node.js** - Entorno de ejecución

## 📖 Estructura de Datos

Cada libro en el inventario contiene:

```json
{
  "titulo": "Nombre del libro",
  "autor": "Nombre del autor",
  "genero": "Género literario",
  "disponible": true/false
}
```

## 🎓 Conceptos Clave Aprendidos

### 📄 JSON (JavaScript Object Notation)
- Formato ampliamente utilizado para almacenar y transferir datos
- Sintaxis sencilla e integración directa con JavaScript
- Indispensable para el desarrollo web moderno

### 🔄 Callbacks
- Herramienta poderosa para manejar asincronía en JavaScript
- Esencial para trabajar con APIs, eventos y operaciones asincrónicas
- Fundamental para entender el flujo de datos en aplicaciones

## 🛠️ Instrucciones de Implementación

1. **📋 Crear objeto JSON inicial**
   - Diseñar la estructura de datos para los libros
   - Definir propiedades: `titulo`, `autor`, `genero`, `disponible`

2. **📖 Simular función de lectura**
   - Implementar callback para simular lectura asincrónica
   - Añadir retraso para simular operación real

3. **⚙️ Desarrollar funciones de interacción**
   - Función para agregar libros
   - Función para actualizar disponibilidad
   - Función para consultar inventario

4. **💾 Simular escritura (Opcional)**
   - Implementar callback para simular escritura
   - Ejecutar al agregar o actualizar libros

## 📚 Recursos Adicionales

Para comenzar con la implementación, puedes consultar el ejemplo base en:
🔗 [Código de Referencia](https://gist.github.com/heladio-devf-mx/b7f9cd1ffe11e2fd9a46cba6ef019ea1)

---

¡Sumérgete en el mundo de la programación asincrónica y la gestión de datos con este emocionante proyecto! 🚀📚

*¿Listo para construir tu primera aplicación de gestión bibliotecaria?* ✨
