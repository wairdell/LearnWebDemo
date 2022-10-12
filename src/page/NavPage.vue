<template>
    <div>
        <h2>Default</h2>
        <span>打个分吧：</span><star-rating :inline="true" :star-size="25" :show-rating="false"></star-rating>
        <ul>
            <li><router-link :to="{name:'helloWorld', params: {msg: 'from nav page'}}" >helloWorld</router-link></li>
            <li><router-link :to="{name:'retentionDemo'}" >retentionDemo</router-link></li>
            <li><router-link :to="{name:'displayDemo'}" >displayDemo</router-link></li>
            <li><router-link :to="{name:'childDiffTypeOfDemo'}" >childDiffTypeOfDemo</router-link></li>
            <li><router-link :to="{name:'interactDemo'}" >InteractDemo</router-link></li>
        </ul>
        <CustomStar :max-rating="maxRating" :rating="rating"></CustomStar>
        <button @click="modifyRating">测试</button>
        <input maxlength="15" pattern="^\d*$" required/>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';

import CustomStar from '@/components/CustomStar.vue';

// import baseUrl, {otherUrl} from '@/config/envConfig.js'
import {default as baseUrl, otherUrl} from '@/config/envConfig.js'

console.log(baseUrl);
console.log(otherUrl);

function* gen() {
    yield 1;
    yield 2;
    yield 3;
    //return 的结果 for of 不会接收 
    return 4;
}

var g = gen();
// console.log(g.next());
// console.log(g.next());
console.log(g.next());
console.log(g.next());
for (let n of g) {
    console.log(`n => ${n}`);
}

function* objectEntries() {
    let propKeys = Object.keys(this);

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

let jane = { firstName : "Jane", lastName : "Doe" };
jane[Symbol.iterator] = objectEntries;
for(let [k, v] of jane) {
    console.log(`${k} => ${v}`)
}

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncFunc1() {
    console.log("asyncFunc1 start date => " + new Date());
    var [ret1, ret2] = await Promise.all([timeout(3000), timeout(5000)]);
    console.log("asyncFunc1 " + ret1 + " , " + ret2);
    console.log("asyncFunc1 end date => " + new Date());
}

asyncFunc1();

async function asyncFunc2() {
    console.log("asyncFunc2 start date => " + new Date());
    var ret1 = await timeout(3000);
    var ret2 = await timeout(5000);
    console.log("asyncFunc2 " + ret1 + " , " + ret2);
    console.log("asyncFunc2 end date => " + new Date());
}

asyncFunc2();

export default {
    name: "NavPage",
    components: {
        StarRating,
        CustomStar
    },
    data() {
        return {
            maxRating: 5,
            rating: 2
        }
    },
    methods: {
        modifyRating: function() {
            // this.maxRating = 7;
            this.rating = (Math.random() * 100) % 6;
            console.log(this.rating);
        }
    }
}   

async function tryReq() {
    return await timeout(1000);
}

console.log("tryReqStart " + Date.now());
tryReq();
console.log("tryReqEnd " + Date.now());

timeout(100).then(() => console.log("then1")).then(() => console.log("then2"));
</script>
 
<style scoped>
    ul {
        list-style-type: decimal;
    }
</style>