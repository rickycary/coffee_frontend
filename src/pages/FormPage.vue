<template>

    <form v-on:submit.prevent="handleSubmit">
        <input type="text" placeholder="Coffee Name" v-model="coffeeName"/>
        <input type="text" placeholder="Type of Coffee" v-model="typeOfCoffee"/>
        <input type="text" placeholder="Hot or Iced" v-model="hotIce"/>
        <input type="number" placeholder="Rating" v-model="rating"/>
        <input type="text" placeholder="Comments" v-model="comments"/>
        <input type="submit" :value="buttonLabel"/>
    </form>

</template>

<script>
    import { useRoute, useRouter } from 'vue-router';
    import {ref, toRefs} from "vue"

    export default {
        name: "CoffeeList",
        props: ["posts", "url", "getPosts"],
        setup(props) {
            const route = useRoute()
            const router = useRouter()
            const { posts, url, getPosts } = toRefs(props)
            const coffeeName = ref("")
            const typeOfCoffee = ref("") 
            const hotIce = ref("")
            const rating = ref("")
            const comments = ref("")

            console.log(url)

            let buttonLabel
            let handleSubmit
            if (route.path === "/edit/") {
                const post = posts.value.find((p) => p.id == route.params.id)
                coffeeName.value = post.coffeeName
                typeOfCoffee.value = post.typeOfCoffee
                hotIce.value = post.hotIce
                rating.value = post.rating
                comments.value = post.comments
                console.log(post._id)
                buttonLabel = "Edit Coffee"
                handleSubmit = async() => {
                    await fetch(url.value + post._id + "/", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            coffeeName: coffeeName.value,
                            typeOfCoffee: typeOfCoffee.value,
                            hotIce: hotIce.value,
                            rating: rating.value,
                            comments: comments.value,
                        })
                    })
                    getPosts.value()
                    router.push("/")
                }
            } else {
                buttonLabel = "Add Coffee"
                handleSubmit = async() => {
                    await fetch(url.value, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            coffeeName: coffeeName.value,
                            typeOfCoffee: typeOfCoffee.value,
                            hotIce: hotIce.value,
                            rating: rating.value,
                            comments: comments.value,
                        })
                    })
                    getPosts.value()
                    router.push("/")
                }
            }
            return {
                coffeeName,
                typeOfCoffee,
                hotIce,
                rating,
                comments,
                handleSubmit,
                buttonLabel
            }
        }
    }


</script>

<style>

</style>