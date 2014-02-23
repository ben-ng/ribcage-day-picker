var ribcage = require('ribcage-view')
  , DayPicker;

DayPicker = ribcage.extend({
  afterInit: function () {
    this.currentTime = new Date();
  }
, events: {
    'click .leftArrow': 'previousDay'
  , 'click .rightArrow': 'nextDay'
  }
, className: 'ribcage-day-picker'
, template: require('./template.hbs')
, context: function () {
    return {
      date: (this.currentTime.getMonth() + 1) + '/' +
        this.currentTime.getDate() + '/' +
        (this.currentTime.getFullYear() + '').substring(2, 4)
    };
  }
, previousDay: function (e) {
    e.preventDefault();

    this.currentTime.setTime(this.getPreviousDay());
    this.$('.date').text(this.context().date);
    this.handleRightArrow();

    this.trigger('change', this.currentTime.getTime());
  }
, nextDay: function (e) {
    e.preventDefault();

    this.currentTime.setTime(this.getNextDay());
    this.$('.date').text(this.context().date);
    this.handleRightArrow();

    this.trigger('change', this.currentTime.getTime());
  }
, afterRender: function () {
    this.handleRightArrow();
  }
, handleRightArrow: function () {
    if(this.getNextDay() > this.getToday())
      this.$('.rightArrow').css({visibility: 'hidden'});
    else
      this.$('.rightArrow').css({visibility: 'visible'});
  }
, getToday: function () {
    var now = new Date();

    return (new Date(now.getFullYear()
      , now.getMonth()
      , now.getDate())).getTime();
  }
, getPreviousDay: function () {
    return (new Date(this.currentTime.getFullYear()
      , this.currentTime.getMonth()
      , this.currentTime.getDate() - 1)).getTime();
  }
, getNextDay: function () {
    return (new Date(this.currentTime.getFullYear()
      , this.currentTime.getMonth()
      , this.currentTime.getDate() + 1)).getTime();
  }
});

module.exports=DayPicker;
