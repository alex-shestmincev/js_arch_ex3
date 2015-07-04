(function() {
  var dispatcher = new Dispatcher();

  function UserStore() {
    this.listeners = {};
    this.items = [];
  }

  UserStorage.prototype.load = function () {
    var me = this;
    User.load(function (err, list) {
      if (err) {
        alert('Ошибка загрузки списка пользователей');
        return;
      }
      list.forEach(function (record) {
        if (!(record instanceof User)) {
          throw new Error('User storage can store only Users');
        }
        me.items.push(record);
        dispatcher.fire('user:added', record);
      });
    });
  };

  window.UserStore = UserStore;
})();





