var app = new Vue({
    el: '#app',
    data: {
        products: [
            {text:"Fancy Dog", price:500, selected:false},
            {text:"Superpowers", price:1000000, selected:false},
            {text:"Used Paper Towel", price:1, selected:false}
        ],
        total: 0,
    },
    computed: {
        selectedProducts: function() {
            return this.products.filter(function(item) {
                return item.selected;
            });
        },
    },
    methods: {
        selectItem: function(item) {
            if (!item.selected) //check
            {
                this.total += item.price;
                item.selected = true;
            }
            else //uncheck
            {
                this.total -= item.price;
                item.selected = false;
            }
        },
    }
});