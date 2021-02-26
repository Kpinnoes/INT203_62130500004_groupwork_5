app.component('photo-item',{
   props:{
    photos: Array,
    filterSearch: Array
   }
   ,
   data(){
     return{
    
     }
      
    },
    template: 
    /*html*/

    `    <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-3">
    <li v-for="(photo, index) in filterSearch" class="mx-auto">
      <p class="mx-auto pb-3 content-center font-mono text-2xl text-center text-black">{{photo.article}}</p>
     <img :src="photo.src" v-on:click=" clickHeart(index)"  @dblclick="fullScreenView(photo)" class="h-52 w-82 border-8 border-white" :alt="photo.title">
      <div class="flex flex-row justify-start space-x-1">
        <p v-if="photo.like > 0"> X
        </p>
        <button v-show="photo.done">
          <svg class="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
       
      </div>
    </li>
  </ul>   
       `,
    methods: {
      clickHeart(index){
        this.photos[index].done = !this.photos[index].done
          },
     fullScreenView(photo){
       this.$emit("full-screen-view",photo)
     }
   
    },
    computed:{
     
      
    }
    
})

