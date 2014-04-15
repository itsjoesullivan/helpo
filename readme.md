#helpo

Display keyboard shortcuts


## API
```javascript
var helpo = new Helpo( shortcutArray, [ contextEl ] );
```

## Basic example

Listens for '?' on window by default

```javascript
var helpo = new Helpo([
  {
    shortcut: 'cmd s',
    description: 'save'
  }
]);
```

## Specify context with second argument

Listens for '?' on <code>this.el</code>

```javascript

var helpo = new Helpo([
  {
    shortcut: 'cmd s',
    description: 'save'
  }
], this.el);
```
