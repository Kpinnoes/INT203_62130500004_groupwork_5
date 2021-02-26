app.component('photo-view',{
    props:{
        photos: Array,
        photo: Array,
        view:Array
    }
    ,data(){
        return{
         
           
       
     }},
     template: 
     /*html*/
     `     
     
     <div v-show="view.fullView" class="flex  h-screen w-screen fixed  justify-center   bg-black ">
       <div class="h-screen m-8 mx-auto ">
           <i class="far fa-2x fa-times-circle text-white flex-row-reverse cursor-pointer" @click="closeFullView()"></i>
           <img :src="view.viewImg" class="h-screen justify-center h-5/6 p-8 mx-auto">
       </div>
 
         
        `,
     methods: {
        closeFullView(){
          this.view.fullView = false;
        }
       
     },
     
 })
 
 