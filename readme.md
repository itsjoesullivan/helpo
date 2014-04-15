#helpo

Display keyboard shortcuts


## API
```javascript
var helpo = new Helpo( shortcutArray, [ contextEl ] );
```

## Basic example
```javascript
var helpo = new Helpo([
  {
    shortcut: 'cmd s',
    description: 'save'
  }
]);
```

## Specify context with second argument
```javascript

var helpo = new Helpo([
  {
    shortcut: 'cmd s',
    description: 'save'
  }
], this.el);
```
