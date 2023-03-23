<template>
    <div>
        <div 
        class="post" 
        v-for="(post, index) in $attrs.posts" 
        v-bind:key="index">
            <router-link :to="{name: 'post', params: {id: index}}">
                <h1>{{ post.coffeeName }}</h1>
            </router-link>
            <!-- Move this to show page later -->
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