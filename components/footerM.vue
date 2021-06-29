<template >
    <footer>
        <div >
            <ul class="pagination">
                <li><a v-on:click="click">《</a></li>
                <li><a v-on:click="click">{{twoPagesBefore}}</a></li>
                <li><a v-on:click="click">{{onePagesBefore}}</a></li>
                <li><a v-on:click="click">{{onePagesAfter}}</a></li>
                <li><a v-on:click="click">{{twoPagesAfter}}</a></li>    
                <li><a v-on:click="click">》</a></li>
            </ul>
        </div>
    </footer>
</template>
<script>
export default {
    name:'footerM',
    props:{
        page:'',
        maxPages:'',
    },
    data(){
        return{

        }
    },
    methods:{
        click(event){
            this.$emit("click",event.currentTarget.innerHTML);
        }
    }
    ,
    computed:{
        twoPagesBefore(){
            if (this.page<=2 ) {
                return 1
            }else if(this.page>=this.maxPages-2)
            {return this.maxPages-3
               
            }else{
                return this.page-2
            }
        },
            onePagesBefore(){
            if (this.page<=2 ) {
                return 2
            }else if(this.page>=this.maxPages-2)
            {
                return this.maxPages-2             
            }else{
                return this.page-1
            }
        },  
            twoPagesAfter(){
            if (this.page>=this.maxPages-2 && !this.page<=2) {
                return this.maxPages
            }else if(this.page<=2){
                return this.page+3 
            }{
                return this.page+2
            }
        },
            onePagesAfter(){
            if (this.page>=this.maxPages-1 && !this.page<=2) {
                return this.maxPages-1
            }else if(this.page<=2){
                return this.page+2  
            }
            else{
                return this.page+1
            }
        }
    }
}
</script>

<style scoped>
    footer{
        align-content: center;
        height: 10%;
        width: 100%;
    }
    footer div{
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    ul.pagination {
        display: inline-block;
        padding: 0;
        margin: 0;
    }
    ul.pagination li 
    {display: inline;
    }
    ul.pagination li a {
        color: white;
        float: left;
        padding: 8px 26px;
        font-size: var(--footer-paginator);
        text-decoration: none;
        transition: background-color .5s;
        cursor: pointer;
    }
    ul.pagination li a:hover:not(.active) {background-color: #ddd;}
</style>