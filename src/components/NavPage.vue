<template>
    <div>
        <ul>
            <li><router-link :to="{name:'helloWorld', params: {msg: 'from nav page'}}" >helloWorld</router-link></li>
            <li><router-link :to="{name:'retentionDemo'}" >retentionDemo</router-link></li>
            <li><router-link :to="{name:'displayDemo'}" >displayDemo</router-link></li>
            <li><router-link :to="{name:'childDiffTypeOfDemo'}" >childDiffTypeOfDemo</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavPage',
    props: {

    }
}   
</script>
 
<style scoped>
    ul {
        list-style-type: decimal;
    }
</style>