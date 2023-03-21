<template>
    <div>
        <div 
        class="post" 
        v-for="(post, index) in $attrs.posts" 
        v-bind:key="index">

            <h1>{{ post.coffeeName }}</h1>
            <!-- Move this to show page later -->
            <input type="checkbox" v-model="post.completed">
        </div>
    </div>
</template>

<script>
export default {
    name: "CoffeePage"
}
</script>

<style>
</style>