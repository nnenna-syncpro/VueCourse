<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Fave)" : ""}}</h2>
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
            id: {
                type: String,
                required: true
            },
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
            // isFavorite: {
            //     type: String,
            //     required: false,
            //     //default can be a complex function
            //     default: "0",
            //     validator: function (value) {
            //         return value === "1" || value === "0";
            //     }
            // }
            isFavorite: {
                type: Boolean,
                required: false,
                //default can be a complex function
                default: false
            }
        },
        data () {
            return {
                detailsAreVisible: false,
                // friend: {
                //     id: 'manuel',
                //     name: "Man lan",
                //     phone: '000 000 0000',
                //     email: 'm@gmail.com'
                // },
                //soln 2: needed to change data in child but not needed to change data in parent
                // friendIsFavorite: this.isFavorite
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
                
                //soln 2 -- toggle fave on props/attr
                // if (this.friendIsFavorite === "1"){
                //     this.friendIsFavorite = '0';
                // }else {
                //     this.friendIsFavorite = "1"
                // }

                //using v-for in App.vue
                //this.friendIsFavorite = !this.friendIsFavorite;

                //soln 1: emit an event for parent to listen to 
                //used on this keyword. Always use kebap case
                //adding the prop id makes this available to be emitted
                //when this event is emitted. it carries this id as an extra data, that would then be provided as a first argument to a method that listens to this event
                this.$emit("toggle-favorite", this.id);
            }
        }
    }
</script>