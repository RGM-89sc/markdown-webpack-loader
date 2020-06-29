## Example

```javascript
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-webpack-loader',
            options: {/* ... */}
          }
        ]
      }
    ]
  }
}
```

```javascript
// something.js
import htmlString from './some.md'

console.log(htmlString)
```

## Options

```typescript
interface options {
  interceptor?: (parser: (markdownString: string) => string, markdown: string) => { [key: string]: any } | string
  parseOptions?: { [key: string]: any }
}
```

`interceptor` A custom function for do something before parse markdown string.You can call the parser function by hand and return the finall data(string or object) there.
`parseOptions` Your marked [options](https://marked.js.org/#/USING_ADVANCED.md#options)