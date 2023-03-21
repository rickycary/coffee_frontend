import CoffeePage from './pages/CoffeePage'
import FormPage from './pages/FormPage'
import SingleCoffee from './pages/SingleCoffee'

export default [
    // Index Page
    {path: "/", component: CoffeePage},
    // Show Page
    {path: "/post/:id", component: SingleCoffee, name: "post"},
    // Create Route
    {path: "/new", component: FormPage},
    // Update Route
    {path: "/edit", component: FormPage},
]