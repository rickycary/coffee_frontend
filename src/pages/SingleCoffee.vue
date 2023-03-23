<template>
    <div>
        <h1>{{ post.coffeeName }}</h1>
        <h2>{{ post.typeOfCoffee }}</h2>
        <h2>{{ post.hotIce }}</h2>
        <h2>{{ post.rating }}</h2>
        <h2>{{ post.comments }}</h2>
        <router-link to="/">Back to Main Page</router-link>
        <router-link :to="{ path: '/edit', params: { id: post._id } }"><button>Edit Coffee</button></router-link>
        <button v-on:click="deletePost">Delete this Coffee</button>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { toRefs } from 'vue';


export default {
    name: "SingleCoffee",
    props: ["posts", "url", "getPosts"],
    setup(props){
        const route = useRoute()
        const router = useRouter()
        const {posts, url, getPosts} = toRefs(props)
        const post = posts.value[route.params.id]
        console.log(url.value)
        console.log(post._id)
        const deletePost = async () => {
            await fetch(url.value + post._id + "/", {
                method: "delete"
            })
            await getPosts.value()
            router.push("/")
        }
        return {
            post, 
            deletePost
        }
    }
}
</script>

<style>

</style>