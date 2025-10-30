## NT2 – Primer Exámen Parcial

**Estudiante:** Gino Tubaro

Este repositorio contiene el material y el proyecto base para el primer examen parcial de NT2.

### 📋 Descripción del Proyecto

Este proyecto es una aplicación Vue.js con Vite que implementa un examen parcial con las siguientes funcionalidades:

- **Inicio**: Visualización de la consigna del examen en formato PDF
- **Conversor de Unidades**: Conversor de temperatura entre Celsius, Fahrenheit y Kelvin
- **Respuesta a Preguntas**: Componente que muestra preguntas del multiple choice con, espero, las respuestas correctas

### 🚀 Temas incluidos

- Uso de Git
- Vue CLI 3
- Creación de un proyecto
- Instalación de bootstrap como dependencia
- Crear componentes (archivo único, múltiples archivos)
- Manejo de la estructura interna de un componente (datos, métodos y propiedades computadas)
- Directivas Data Binding (v-bind ":", v-on "@", v-model)
- Directivas estructurales (v-if, v-show, v-for, v-else, v-else-if)
- Directivas de atributos (:class, :style)
- Uso de Props (No se realizo)
- Formularios: entrada de datos con validaciones
- Ruteo de componentes (manejados desde navegación en HTML)

### 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── base.css
│   └── main.css
├── components/
│   ├── ConversorDeUnidades/       # Componente de múltiples archivos
│   │   ├── index.vue
│   │   └── src/
│   │       ├── Conversor.html
│   │       ├── Conversor.js
│   │       └── Conversor.css
│   ├── Inicio.vue                 # Componente de archivo único
│   ├── Navbar.vue                 # Barra de navegación
│   └── RespuestaAPreguntas.vue    # Componente de archivo único
├── App.vue
├── bootstrap.js
├── main.js
└── router.js
```

### Componentes Implementados

#### 1. Inicio (`Inicio.vue`)

- Muestra la consigna del examen en formato PDF
- Permite abrir el PDF en una nueva pestaña
- Visualización embebida con iframe

#### 2. Conversor de Unidades (`ConversorDeUnidades/`)

- **Componente de múltiples archivos** (HTML, JS, CSS separados)
- Convierte temperatura de Celsius a Fahrenheit y Kelvin
- Usa propiedades computadas para realizar conversiones
- Cambio de color dinámico según la temperatura ingresada
- Validación de valores numéricos

#### 3. Respuesta a Preguntas (`RespuestaAPreguntas.vue`)

- **Componente de archivo único**
- Muestra preguntas de opción múltiple
- Destaca las respuestas correctas con checkmarks verdes
- Implementa el método `v-for` para iterar sobre preguntas y opciones
- Usa clases dinámicas con `:class`

#### 4. Navbar (`Navbar.vue`)

- Barra de navegación con Bootstrap
- Navegación responsive con menú hamburguesa
- Integrado con Vue Router para navegación entre componentes

### 🛠️ Tecnologías Utilizadas

- **Vue 3** (^3.5.22)
- **Vite** (^7.1.11)
- **Vue Router** (^4.6.3)
- **Bootstrap** (^5.3.8)

### 🔧 Linters y formato de código

El proyecto usa linters para mantener un estilo de código consistente y detectar errores de forma temprana:

- **ESLint**: análisis estático de JavaScript/Vue. Configuración en `eslint.config.js`.
- **Prettier**: formateo automático. Configuración en `.prettierrc.json` y `.editorconfig`.

Comandos útiles:

```sh
npm run lint    # Analiza y corrige errores de linting
npm run format  # Formatea el código con Prettier
```

Recomendación: configurar VS Code con la extensión oficial de Vue y habilitar el guardado con formato para aplicar Prettier automáticamente.

### 🚀 Puesta en marcha

1. Instalar dependencias:

```sh
npm install
```

2. Iniciar servidor de desarrollo:

```sh
npm run dev
```

3. Abrir en el navegador:

```sh
npm start   # Abre automáticamente en el navegador
```

### 📦 Build de producción

```sh
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`.

### 👀 Preview de producción

Para ver cómo se verá el build de producción:

```sh
npm run preview
```

### 🔗 Rutas Disponibles

- `/` - Página de inicio con consigna del examen
- `/conversor-de-unidades` - Conversor de temperatura
- `/respuesta-a-preguntas` - Preguntas y respuestas del examen

### 📝 Notas de Implementación

- El proyecto usa **Vite** en lugar de Vue CLI
- Implementación de componentes de **archivo único** y **múltiples archivos**
- Uso extensivo de **propiedades computadas** para reactividad
- Implementación de **Vue Router** para SPA
- Estilos con **Bootstrap 5** para UI responsive
- Validación de formularios con directivas de Vue
- Uso de directivas de binding (`:style`, `:class`) para estilos dinámicos

### 🎓 Autor

**Gino Tubaro** - Examen Parcial PNT2
