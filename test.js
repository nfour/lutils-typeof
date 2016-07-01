var typeOf = require('./typeOf')

var samples = {
    'undefined'	: undefined,
    'boolean'	: true,
    'string'	: '""',
    'function'	: function() {},
    'array'		: [],
    'object'	: {},
    'null'		: null,
    'number'	: 0,
    'date'		: new Date(),
    'regexp'	: /a/,
    'nan'		: NaN,
}

var typeKeys = [
    'Undefined',
    'Boolean',
    'String',
    'Function',
    'Array',
    'Object',
    'Null',
    'Number',
    'Date',
    'RegExp',
    'NaN',
]

Object.keys(samples).forEach(function(key) {
    var value = samples[key]

    exports["typeOf." + key] = function(test) {
        test.ok( typeOf(value) === key )

        var upperKey = typeKeys.filter(function(_key) {
            return _key.toLowerCase() === key
        })[0]

        test.ok( typeOf[ key ](value) )
        test.ok( typeOf[ upperKey ](value) )

        test.done()
    }
})
