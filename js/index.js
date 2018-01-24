var Child = {
  template: '#childarea'
};

new Vue({
  el: '#app',
  data: function data() {
    return {
      isShowing: false,
      bkClass: 'bk',
      blurClass: 'blur'
    };
  },

  methods: {
    toggleShow: function toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
});