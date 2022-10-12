<template>
    <div style="display: inline-block; text-align: left;">
        <span>
            <img class="star" v-for="n in maxRating" :key="n" :src="require(n <= currentRating ? '../img/star_fill.png' : '../img/star.png')" @click="onStartClick(n)" @mouseenter="onStarMounted(n)" @mouseleave="onEndMounted(n)"/>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            maxRating: {
                type: Number,
                default: 5
            },
            rating: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                normalSrc: "../img/star.png",
                selectedSrc: "../img/star_fill.png",
                selectedRating: 0,
                currentRating: 0
            }
        },
        created() {
            this.selectedRating = this.rating;
            // this.currentRating = this.rating;
        },
        watch: {
            rating: function(val) {
                this.selectedRating = val;
            },
            selectedRating: function(val) {
                this.currentRating = val
            }
        },
        emits: ['update:rating'],
        methods: {
            onStartClick: function(n) {
                this.selectedRating = n;
            },
            onStarMounted: function(n) {
                // console.log(n);
                this.currentRating = n;
            },
            onEndMounted: function(n) {
                if (this.currentRating === n) {
                    this.currentRating = this.selectedRating;
                }
            }
        }   
    }
</script>

<style  lang='scss' scoped>
ul {
    list-style: none;
}

.star {
    width: 25px;
}
</style>