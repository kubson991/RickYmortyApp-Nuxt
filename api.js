async function getCharacters(page){
    let characters=(await(await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)).json()).results
    return characters
}
async function getMaxPages(){
    let maxPages=(await(await fetch(`https://rickandmortyapi.com/api/character`)).json()).info
    maxPages=maxPages.pages
    return maxPages
}

export default {getCharacters,getMaxPages };
 