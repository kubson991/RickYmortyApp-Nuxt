
function obtainCap(acumulated,episode,index){
    let penultimoCaracter=episode.charAt(episode.length-2)
    let ultimoCaracter=episode.charAt(episode.length-1)
    let capitulo
    if(!isNaN(penultimoCaracter)){
        capitulo=penultimoCaracter+ultimoCaracter
    }else{
        capitulo=ultimoCaracter 
    } 
    if (index==1) {
        return `${!isNaN(acumulated.charAt(acumulated.length-2))?acumulated.charAt(acumulated.length-2)+acumulated.charAt(acumulated.length-1):acumulated.charAt(acumulated.length-1)},${capitulo}`
    }else if(index==0){
        return capitulo
    }else {
        return `${acumulated},${capitulo}`         
    }
}

async function getCharacters(page){
    let characters=(await(await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)).json()).results
    return characters
}
async function getMaxPages(){
    let maxPages=(await(await fetch(`https://rickandmortyapi.com/api/character`)).json()).info
    maxPages=maxPages.pages
    return maxPages
}
async function getOneCharacter(id){
    let characters=(await(await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json())
    return characters
}

async function getChapters(linkChapters){
    let chapters
    linkChapters.length==1?chapters=obtainCap(0,linkChapters[0],0):chapters=linkChapters.reduce(obtainCap)
    const data=await(await fetch(`https://rickandmortyapi.com/api/episode/${chapters}`)).json() 
    console.log(data)
    return Array.isArray(data)?data:[data]
}



export default {getCharacters,getMaxPages,getOneCharacter,getChapters};
 