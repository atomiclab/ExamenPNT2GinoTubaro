## NT2 – Primer Exámen Parcial

Este repositorio contiene el material y el proyecto base para el primer examen parcial de NT2.

### Temas incluidos

- Uso de Git
- Vue CLI 3
- Creación de un proyecto
- Instalación de bootstrap como dependencia
- Crear componentes (archivo único, múltiples archivos)
- Manejo de la estructura interna de un componente (datos, métodos y propiedades computadas)
- Directivas Data Binding (v-bind ":", v-on "@", v-model)
- Directivas estructurales (v-if, v-show, v-for, v-else, v-else-if)
- Directivas de atributos (:class, :style)
- Uso de Props
- Formularios: entrada de datos con validaciones
- Ruteo de componentes (manejados desde navegación en HTML)

### Linters y formato de código

El proyecto usa linters para mantener un estilo de código consistente y detectar errores de forma temprana:

- ESLint: análisis estático de JavaScript/Vue. Configuración en `eslint.config.js`.
- Prettier: formateo automático. Configuración en `.prettierrc.json` y `.editorconfig`.

Comandos útiles:

```sh
npm run lint
```

Recomendación: configurar VS Code con la extensión oficial de Vue y habilitar el guardado con formato para aplicar Prettier automáticamente.

### Puesta en marcha

```sh
npm install
npm run dev
```

### Build de producción

```sh
npm run build
```
