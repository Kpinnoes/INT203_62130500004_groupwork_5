app.component('photo-search',{
  props:{
    photos: Array

  }
  ,data(){
   return{ 
     search : '',
    seen: false,
  
}
   },
   template: 
   /*html*/
   `     
   <div class="mx-auto container" @keyup="filterSearch">
   <div class="flex items-center justify-between bg-black text-white h-10">
        <button class="btn btn-lg btn-primary" v-on:click="seen = !seen" type="submit">
        <i class="fa fa-search m-4 " ></i></button>

        <div v-if="seen">  
          <input  v-model="search" class="mx-auto ml-2 p-1 w-100 placeholder-gray-500 
          placeholder-opacity-50 focus:outline-none text-black rounded-sm"
            type="text" placeholder="Please enter text for searching photos" 
            @keyup = "filterSearch"/> 
            <button @click="searchBut" class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500">Cancel</button>
           <!-- <div v-bind:id="myInput"></div>-->
  </div>
         
        </div>  
       
      `,
   methods: {
    searchBut() {
      this.seen = !this.seen;
      this.search = '';
     },
     
     
   },computed:{
    filterSearch() {
 this.$emit("filter-search",this.photos.filter((item) => {
  return item.article.toLowerCase().includes(this.search.toLowerCase())
}))
}
   }
   
})

