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
      horarioInput:"",
      alerta:false,
      mensaje:""
      
    },
    methods:{
        agregarTarea(){
           const newTarea = {
               titulo:this.tituloInput,
               horario:this.horarioInput}
               this.tareas.push(newTarea);
               this.mostraralerta("Tarea Agregada Exitosamente ") 
             
        },
        eliminar(valori){
           this.tareas.splice(valori,1);
           this.mostraralerta("Tarea Eliminada ") 
        },
        mostraralerta(mensajes){
            this.mensaje=mensajes
            this.alerta= true
            setTimeout(() => {
             this.alerta= false
            }, 3000);
        } 
    },
    computed:{
           cantidad(){
               return this.tareas.length
           }
    } 
  })