Vue.component('card',{
    template: `<div class="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
              </div>`
})

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue !'
    }

  })
  