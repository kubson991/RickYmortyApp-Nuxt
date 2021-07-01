<template >
    <div>
        <header-m/> 
        <main>
            <img src="" alt="">
            <h1>{{name}}</h1>
            <img :src="img" :alt="name">
            <h2>Gender: {{gender}}</h2>
            <h2>Species: {{species}}</h2>
            <h2>Status: {{status}}</h2>
            <h2>Origin: {{origin}}</h2>
            <h3>Episodes</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Air date</th>
                    <th>Episode</th>
                </tr>
                <tr v-for="chapter in chapters" :key="chapter.id">
                    <th>{{chapter.name}}</th>
                    <th class="mid-table">{{chapter.air_date}}</th>
                    <th>{{chapter.episode}}</th>
                </tr>
            </table>
 
 
        </main>
    </div>
</template>

<script>
import  api from '~/api'
import headerM from '../../components/headerM.vue'
export default {
  components: { headerM },
    name:'singleCharacter'   ,
    data(){
        return{
            name:'',
            img:'',
            gender:'',
            status:'',
            origin:'',
            species:'',
            chapters:[],            
        }
    },
    async created(){
        let character=await api.getOneCharacter(this.$route.params.id) 
        this.name=character.name
        this.img=character.image  
        this.gender=character.gender
        this.status=character.status
        this.origin=character.origin.name
        this.species=character.species
        this.chapters=await api.getChapters(character.episode) 
 
    }
}
</script>
<style scoped>

main{
    display: flex; 
    flex-direction: column; 
    justify-items: center;
    align-items: center;
    font-family:'Zen Dots', cursive ;
}
img{
    width: 50%;
    border-radius: 10px;
}
h1,h2,h3{
    font-size: var(--font-info);
    color: white;
    margin: 20px;
    width: fit-content;
    height: 1em;
}
h1{
    font-size: 8rem;
}
h3{
    margin-top: 60px;
    margin-bottom: 10px;
}
.chapters-container{
    width: 70%;
    height: auto;
    border-radius: 10px;
    background-color: rgba(245, 245, 220, 0.733);
    font-size: 3rem;
}
table{
    width: 98%;
    border-radius: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}

th{
    text-align: left;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.911);
}

@media(min-width:1080px){
        img{
            width: 30%;
        }    

}
</style>