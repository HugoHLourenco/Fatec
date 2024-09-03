const {createApp} = Vue;

createApp({
    data() {
        return {
           nomes: [{
               nome: "Hugo III",
               idade: 22,
               email: "HugoIIIIII",
               expanded: false
           }]
        }
    },
    methods: {
        expandedItem(item) {
            item.expanded = !item.expanded;
        }
    }
}).mount("#app");
