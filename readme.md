#helpo

Display keyboard shortcuts


## Usage
```javascript
var shortcutArray = [
  {
    shortcut: String,
    description: String
  }
];
var helpo = new Helpo( shortcutArray );
```

## Example

Listens for '?' on window by default

```javascript
var helpo = new Helpo([
  {
    shortcut: 'cmd s',
    description: 'save'
  }
]);
```

## Screenshot

![Example of helpo in action](http://joesul.li/helpo/helpo-example.png)
