import { createApp } from 'vue';

// a named export is imported using curly braces and a default export does not need curly braces. Also a default export can be renamed at point of import
import App from "./App.vue";
//import FriendContact config object, which points at the js object being exported
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);

//call component, provide name and config object for the component
//this unlocks the FriendContact component in app and the name becomes a custom HTML element that can be used in App.vue
app.component("friend-contact", FriendContact);

app.mount('#app');
