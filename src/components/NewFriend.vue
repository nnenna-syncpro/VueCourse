<template>
    <form action="" @submit.prevent="submitData">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="enteredName"> 
        </div>
        <div>
            <label for="">Phone Number</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label for="">Email</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add Friend</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: ['add-friend'],
        data(){
            return{
                enteredName: "",
                enteredPhone: "",
                enteredEmail: "",
            }
        },
        methods: {
            submitData(){
                //emit add-friend custom event so that I can forward datat to whoever is listening to that event
                this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredEmail);
                
            }
        }
    }
</script>