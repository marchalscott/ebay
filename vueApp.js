const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

const vm = new Vue({
          el: '#app',
          data: {
            results: []

          },
          mounted() {

      this.upDate();
      this.timer = setInterval(this.upDate, 10000)
      }, 

      methods:{

      upDate: function() {

            axios.get(url).then(response => {
              this.results = response.data
            })
      }, 
      cancelAutoUpdate: function() { clearInterval(this.timer) },


beforeDestroy() {
  clearInterval(this.timer)
}

          }
        });