import { createApp } from 'vue';

// a named export is imported using curly braces and a default export does not need curly braces. Also a default export can be renamed at point of import
import App from "./App.vue";

createApp(App).mount('#app');
