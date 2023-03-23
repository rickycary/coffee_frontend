<template>
    <div>
        <div 
        class="post" 
        v-for="(post, index) in $attrs.posts" 
        v-bind:key="index">
            <router-link :to="{name: 'post', params: {id: index}}">
                <div class="coffeeName">
                    <h1>{{ post.coffeeName }}</h1>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CoffeePage"
}
</script>

<style>
    .post {
        text-align: center;
        background-color: aquamarine;
    }
</style>