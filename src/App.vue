<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <new-friend @add-friend="addFriend"></new-friend>
        <ul>
            <li></li>
            <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" :phone-number='friend.phone' :email-address="friend.email"
                :isFavorite="friend.isFavorite" @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact"></friend-contact>
            <!-- <friend-contact name="Man Ban" isFavorite="0" phone-number='000 000 1111'
                email-address="m2@gmail.com"></friend-contact>
            <friend-contact name="Man Can" phone-number='000 000 2222' email-address="m3@gmail.com"></friend-contact>
            <friend-contact name="Man Dan" phone-number='000 000 3333' email-address="m4@gmail.com"></friend-contact> -->
        </ul>
    </section>
</template>

<!-- props should not be mutated. That means data passed from parent to child should only be changed in parent. Because Vue uses unidirectional flow-->
<!-- you can still toggle fave without passing it as an attribute. -->
<!-- To use a boolean value in prop attribute you have to bind the prop/attr, otherwise attr usually return strings. So you have to bind to pas a JS value other than a string -->
<!-- How to pass data from child to parent? Answer: emit. The child should emit an event to which a parent can listen. We can emit our own custome events inside our vue components-->
<!-- Listen to emit using @emit and bind it to any JS code that should execute when event is emitted-->
<script>
import NewFriend from './components/NewFriend.vue';
import FriendContact from './components/FriendContact.vue';
//cannot export a const it has to be a default export
export default {
    components: { FriendContact, NewFriend },
    // this is the config object is meant for the config object in main.js file
    data() {
        return {
            friends: [
                 {
                    id: 'manuel',
                    name: "Man lan",
                    phone: '000 000 0000',
                    email: 'm@gmail.com',
                    isFavorite: false
                },
                {
                    id: 'Sanuel',
                    name: "San lan",
                    phone: '000 000 1111',
                    email: 's@gmail.com',
                    isFavorite: false
                }
            ]
        };
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            //this.id from FriendContact.vue is accepted here as a first parameter to help us identify which friend's status we want to change
            const identifiedFriend = this.friends.find(friend => friend.id === friendId);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
            // when data changes vue would detect the change, automatically pass the updated fave status to the component and update the UI
        },
        addFriend(name, phone, email){
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false
            };
            this.friends.push(newFriendContact);
        },
        deleteContact(friendId){
           //overwrite array and assign new property to variable holding array. By filtering out what you dont want from the old array
           this.friends = this.friends.filter(friend => friend.id !== friendId);
           //Vue would detect this change in friends property, then re-render list in template and update UI appropriately
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>