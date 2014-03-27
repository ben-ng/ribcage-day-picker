ribcage-day-picker
==============

This is a simple date picker that steps through each day.

`ribcage-day-picker` is a [Backbone](http://backbonejs.org/) view, best served with the other great components in the [ribcage-ui](https://github.com/Techwraith/ribcage-ui) collection.

Usage
-----

#### Creating A Day Picker

```js
var Picker = require('ribcage-day-picker')
  , picker;

picker = new Picker();
```

### API

```
picker.previousDay();
picker.today();
picker.nextDay();
```

### Listening for changes
```js
picker.on('change', function (selection) {
  // `selection` is a unix timestamp
});
```

License & Acknowledgements
--------------------------

Copyright (c) 2013 Ben Ng, http://benng.me

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
