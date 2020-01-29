let vm = new Vue({
    el: "#app",
    data: {
      current: 0,
      total: 0,
      operators: ["+", "-", "*", "/"],
      selected: null
    },
    computed: {
      answer: function() {
        return eval(this.total + this.selected + Number(this.current));
      }
    },
    methods: {
      updateTotal: function() {
        this.total = this.answer;
      },
      calculate: function(symbol = null) {
        this.updateTotal();
        this.selected = symbol;
        this.current = 0;
      }
    }
  });