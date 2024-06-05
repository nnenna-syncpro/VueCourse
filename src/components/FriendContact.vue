<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: [
            //Make vue aware of all the custom attributes we want to accept on this components
            //use camel case for props because you can refer to it in other options using this. And hyphens in JS is invalid code/propertyname.I.e this.phone-number is invalid but this.phoneNumber is valid
            //Moreover, vue automatically translates props written in camelcase to kebap/hyphenated attributes. i.e. phoneNumber in component becomes phone-number in attribute of App.vue
            //props should NOT have the same names as data or computed properties
            "name",
            "phoneNumber",
            "emailAddress"
        ],
        data () {
            return {
                detailsAreVisible: false,
                friend: {
                    id: 'manuel',
                    name: "Man lan",
                    phone: '000 000 0000',
                    email: 'm@gmail.com'
                }
                 
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    }
</script>