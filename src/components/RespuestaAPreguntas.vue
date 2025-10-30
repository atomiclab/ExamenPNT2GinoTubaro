<!-- Este sera un SINGLE FILE COMPONENT -->
<!-- La idea es armar un array con las preguntas, poner la opcion correcta y mostrar el resultado de la pregunta -->
<template>
  <div class="container mt-3">
    <h3 class="mb-3">Preguntas</h3>

    <div v-for="(p, index) in preguntas" :key="index" class="mb-4">
      <h5 class="mb-2">Pregunta {{ index + 1 }}/{{ preguntas.length }}</h5>
      <p class="mb-2">{{ p.pregunta }}</p>

      <ul class="list-group">
        <li
          v-for="(opciones, indexOpciones) in p.opciones"
          :key="indexOpciones"
          class="list-group-item"
          :class="{ 'list-group-item-success': indexOpciones === p.indiceCorrecto }"
        >
          <!-- Verifica si la opcion es la correcta y muestra un check -->
          <span class="me-2" v-if="indexOpciones === p.indiceCorrecto">✅</span>
          <strong>{{ letraOpcion(indexOpciones) }})</strong> {{ opciones }}
          <!--El metodo letraOpcion es para que devuelva la letra de la opcion-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//Array con las preguntas y respuestas, indiceCorrecto es el indice de la opcion correcta
export default {
  name: 'RespuestaAPreguntas',
  data() {
    return {
      preguntas: [
        {
          pregunta: 'Como es la forma reducida de v-on:click?',
          opciones: ['v-on@click', '#click', '@click', ':click', 'v-bind#click'],
          indiceCorrecto: 2,
        },
        {
          pregunta: 'El modificador trim recorta...',
          opciones: [
            'Los espacios puestos adelante en una entrada de texto',
            'Los espacios puestos atrás en una entrada de texto',
            'Los espacios adelante y atrás en una entrada de texto',
            'Saca los espacios intermedios puestos en una entrada de texto',
          ],
          indiceCorrecto: 2,
        },
        {
          pregunta: 'La propiedad routes en la definición del router de Vue.js tiene como función:',
          opciones: [
            'Definir el path y el componente activo para esa ruta',
            'Define la barra de navegación a utilizar',
            'Define sólo todos los componentes activos en el router',
            'Definir el modo de trabajo de las rutas',
          ],
          indiceCorrecto: 0,
        },
      ],
    }
  },
  methods: {
    //esto es para que devuelva la letra de la opcion, si no, devuelve una cadena vacía
    letraOpcion(index) {
      const letras = ['a', 'b', 'c', 'd', 'e']
      return letras[index] || ''
    },
  },
}
</script>

<style scoped></style>
