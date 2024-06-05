<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Fave)" : ""}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        // props: [
        //     //Make vue aware of all the custom attributes we want to accept on this components
        //     //use camel case for props because you can refer to it in other options using this. And hyphens in JS is invalid code/propertyname.I.e this.phone-number is invalid but this.phoneNumber is valid
        //     //Moreover, vue automatically translates props written in camelcase to kebap/hyphenated attributes. i.e. phoneNumber in component becomes phone-number in attribute of App.vue
        //     //props should NOT have the same names as data or computed properties
        //     "name",
        //     "phoneNumber",
        //     "emailAddress",
        //     "isFavorite"
        // ],
        props: {
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: String,
                required: false,
                //default can be a complec function
                default: "0",
                validator: function (value) {
                    return value === "1" || value === "0";
                }
            }
        },
        data () {
            return {
                detailsAreVisible: false,
                friend: {
                    id: 'manuel',
                    name: "Man lan",
                    phone: '000 000 0000',
                    email: 'm@gmail.com'
                },
                //soln 2
                friendIsFavorite: this.isFavorite
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                //this function would cause an error because you are trying to change the value that has been set in the parent from the child element. This is called mutation and goes against the unidirectional flow of data
                // if (this.isFavorite === "1"){
                //     this.isFavorite = '0';
                // }else {
                //     this.isFavorite = "1"
                // }
                
                //Solutions: 1) let the parent know you want to change data, then the parent would change it and pass the data back to the child
                //2) take data recived from parent as initial value, change data and display it in the child, however, the data in the parent is not changed
                
                //soln 2
                if (this.friendIsFavorite === "1"){
                    this.friendIsFavorite = '0';
                }else {
                    this.friendIsFavorite = "1"
                }
            }
        }
    }
</script>