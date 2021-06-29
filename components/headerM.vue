<template>
    <header>
        <p>Rick and Morty Characters</p>
        <a href="https://www.facebook.com/sebastian.povedaflorez">Acerca de mi</a>
    </header>  
</template>
<script>
export default {
    name:'headerM',
}
</script>
<style scoped>

    header{
        height: 5%;
        display: flex;
        flex-wrap: wrap;
        font-family: 'Rock Salt', cursive;
        justify-content: space-between;
        align-content: center;
    }

    header p{
        margin-left: 50px;
        margin-top: 15px;
        font-size: var(--header);
        color: white;
    }
    header a{
        color: white;
        margin-right: 50px;
        margin-top: 15px;
        font-size: var(--header);
    }
</style>