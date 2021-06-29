<template>
    <section>
        <header-m/>
        <main class="card-container" >
            <card v-for="character in characters" :key="character.id" :character="character" />
        </main>  
        <footer-m :page="page" :maxPages="maxPages" v-on:click="nextPage" />
    </section>   
</template>

<script>
import headerM from '../components/headerM.vue'
import card from '../components/card.vue'
import footerM from '../components/footerM.vue'
import  api from '../api'
export default {
    components:{headerM,card,footerM},
    name:'index',
    data(){
        return{
            page:1 ,
            characters:[],
            maxPages:0 ,

        }
    },
    methods:{
        async nextPage(text){
            if (text=='《') {
            this.page=1                
            } else if(text=='》'){
                this.page=this.maxPages
                
            }else{
                this.page=parseInt(text)                 
            }
            this.characters=await api.getCharacters(this.page)
        }
    },
    async created(){
        this.characters=await api.getCharacters() 
        this.maxPages=await api.getMaxPages()
  
    }
}
</script>

<style >

    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-size: 62.5%;
    }
    html{
        width: 100vw;
        overflow-x: hidden;
    }
        :root {
        --header: 3rem;
        --font-card: 3rem; 
        --footer-paginator:8rem;
    }
    body{
        background-image: url("https://i.pinimg.com/originals/0a/eb/52/0aeb52af3cb13c91c0aead5aba52480f.jpg");
        background-position:center;
        background-repeat: no-repeat;
        background-size:cover;
        background-attachment: fixed;
        height: 100vh;
        width: 100vw;
    }
    .card-container{
        padding: 10px;
        margin: auto;
        width: 90%;
        height:auto;
        margin-top: 20px;
        display: grid;
        grid-template-columns:repeat(auto-fit,minmax(470px,1fr));
        grid-auto-rows:min-content;
        gap: 20px;
    }


</style>