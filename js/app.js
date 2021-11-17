var app = new Vue({
    el: '#app',
    data: {
      tareas:[
          {titulo:"Leer",
           horario:"09:00 a 09:30 hs"},
           {titulo:"Estudiar",
           horario:"09:30 a 10:30 hs"},
           {titulo:"Bicicleta",
           horario:"10:30 a 11:00 hs"}
      ],
      tituloInput:"",
      horarioInput:""
    },
    methods:{
        agregarTarea(){
           const newTarea = {
               titulo:this.tituloInput,
               horario:this.horarioInput}
               this.tareas.push(newTarea) 
            

        } 
    } 
  })