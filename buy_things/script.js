var app = new Vue({
    el: '#app',
    data: {
        products: [
            {text:"Fancy Dog", price:500, selected:false},
            {text:"Superpowers", price:1000000, selected:false},
            {text:"Used Paper Towel", price:1, selected:false},
            {text:"Tom Cruise's Hair Clippings", price:200,selected:false},
            {text:"Antique Pizza Slice", price:22, selected:false},
            {text:"Whole Cello",price:4300,selected:false},
            {text:"Half Cello",price:15,selected:false},
            {text:"Toothpaste",price:2,selected:false},
            {text:"Dad's Fingernail Clippings",price:8,selected:false},
            {text:"Personal Chef",price:5500,selected:false}
        ],
        total: 0,
    },
    computed: {
        selectedProducts: function() {
            return this.products.filter(function(item) {
                return item.selected;
            });
        },
        somethingSelected: function() {
            for(var i=0; i < this.products.length; i++) {
                if (this.products[i].selected)
                {
                    return true;
                }
            }
            return false;
        }
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
        pay: function() {
            location.href="./money.html";
        },
       /* background: function() {
            var backgrounds = new Array[
                "url('/images/m1.gif')"
            ]
            document.getElementById("money").style.backgroundImage=backgrounds[0];
        }*/
    }
});