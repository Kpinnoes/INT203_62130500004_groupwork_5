const app = Vue.createApp({
    data() {
        return {    
               isHidden: true,
                search: '',  
                index: null,
                photo: [],

               
view:{
    fullView : false,
    viewImage:'',
},

         photos: [
            {   src: 'images/2.jpg',
                article: 'Hello',
                 favor: false,
                like: 0,
                done: false,
            },
            {
                src: 'images/5.jpg',
                article: 'World',
                favor: false,
                like: 0,done: false,
            },
            {
                src: 'images/6.jpg',
                article: 'Dolphin',
                favor: false,
                like: 0,done: false,

            },
            {
                src: 'images/9.jpg',
                article: 'Team 2020',
                favor: false,
                like: 0,done: false,
            },
            {
                src: 'images/8.jpg',
                article: 'Welcome to ',
                favor: false,
                like: 0,done: false,
            },
            {
                src: 'images/11.jpg',
                article: 'this Family <3',
                favor: false,
                like: 0,
                done: false,
            }
      

        ],  filterSearch: [],
    }
    },
        
      
    methods: {
      
       filterSearched(filters){
            this.filterSearch = filters;
        }, 
        fullScreenView(photo){
            if(!this.view.fullView){
            
                this.view.fullView = true;     
            } this.view.viewImg =  photo.src;

        }

          
        
        
     
    },
    computed: {
      
        incrementCounter() {
            return this.photos.filter( t => t.done ).length  
          }, countclickHeart(){ 
            return this.photos.length
          }
        
        
        },
       
    
 

})
