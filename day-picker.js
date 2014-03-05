var ribcage = require('ribcage-view')
  , DayPicker;

DayPicker = ribcage.extend({
  afterInit: function () {
    this.currentTime = new Date();
  }
, events: {
    'click .leftArrow': 'previousDay'
  , 'click .date': 'today'
  , 'click .rightArrow': 'nextDay'
  }
, className: 'ribcage-day-picker'
, template: require('./template.hbs')
, context: function () {
    var days = [
          'Sun'
        , 'Mon'
        , 'Tue'
        , 'Wed'
        , 'Thu'
        , 'Fri'
        , 'Sat'
        ]
      , months = [
          'Jan'
        , 'Feb'
        , 'Mar'
        , 'Apr'
        , 'May'
        , 'Jun'
        , 'Jul'
        , 'Aug'
        , 'Sep'
        , 'Oct'
        , 'Nov'
        , 'Dec'
        ]
      , shortDate = days[this.currentTime.getDay()] + ', ' +
          months[this.currentTime.getMonth()] + ' ' +
          this.currentTime.getDate();

    return {
      date: this.isToday() ? 'Today' : shortDate
    };
  }
, previousDay: function (e) {
    e.preventDefault();

    this.currentTime.setTime(this.getPreviousDay());
    this.$('.date').text(this.context().date);
    this.handleRightArrow();

    this.trigger('change', this.currentTime.getTime());
  }
, today: function (e) {
    e.preventDefault();

    this.currentTime.setTime(this.getToday());
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
    if(this.isToday())
      this.$('.rightArrow').css({visibility: 'hidden'});
    else
      this.$('.rightArrow').css({visibility: 'visible'});
  }
, isToday: function () {
    return this.getNextDay() > this.getToday();
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
