new Vue({
    el:'#vue-app',

    data:{
        health:100,
        ended:false
    },

    methods:{
        punch: function(){
            this.health -=10; /*reduce 10 from 100 each time */
            if(this.health <=0){
                this.ended = true;
            }
        },

        restart: function(){
            this.health = 100;
            this.ended =false;
        }
    },

    computed:{

    },
});