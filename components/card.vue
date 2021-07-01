<template>
    <nuxt-link :to="`/characters/${id}`" class="card">
        <img :src="character.image" :alt="character.name">
        <h1>{{name}}</h1>
        <h2>{{species}}</h2>
        <p :class="[status==='Alive'? 'Alive' : status==='Dead'?'Dead':'unknown']">{{status}}</p>
    </nuxt-link>  
</template>

<script>
export default {
    name:'characterCard',
    props:{
        character:Object
    },
    data(){
        return{
            name:this.character.name,
            species:this.character.species,
            status:this.character.status,
            id:this.character.id,
        }
    }           
}
</script>

<style scoped>
    .card{
        font-family: 'Zen Dots', cursive;
        text-decoration: none;
        width:100% ;
        height:250px;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "I H"
                            "I HS"
                            "I P";
        background-color: #d3fbd894;
        border-radius: 20px;
    }
    .card img{
        grid-area:I;
        max-width:200px;
        max-height:80% ;
        align-self: center;
        justify-self: center;
        border: solid black 3px;
    }
    .card h1{
        height:3.5em;
        width: 100%;
        font-size: var(--font-card);
        grid-area: H;
        text-align: left;
        align-self: center;
    }
    .card h2{
        font-size: var(--font-card);
        grid-area: HS;
        height: 2.1em;
        width: 100%;
        margin-top: 20px;
        text-align: left;
        align-self: center;
    }
    .card p{
        padding: 3px;
        width:fit-content;
        grid-area: P;
        align-self: center;
        border-radius: 5px;
        text-align: center;
        text-justify: auto;
        font-size: var(--font-card);
    }
    .card .Alive{
        color: green;
        border: green solid 1px;
    }
    .card .Dead{
        color: red;
        border: red solid 1px;
    }
    .card .unknown{
        color: blue;
        border: blue solid 1px;
    }
</style>