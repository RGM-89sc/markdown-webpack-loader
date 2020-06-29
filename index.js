const marked = require('marked')
const loaderUtils = require('loader-utils')

module.exports = async function (markdownString) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async()

  if (options.interceptor && typeof options.interceptor === 'function') {
    marked.setOptions(options.parseOptions || {})

    const result = await options.interceptor(marked, markdownString)
    if (typeof result === 'string' || result instanceof Object) {
      callback(null, `export default ${JSON.stringify(result)}`)
    } else {
      callback(null, '')
    }
    return undefined
  }

  marked.setOptions(options.parseOptions || {})

  callback(null, `export default ${JSON.stringify(marked(markdownString))}`)
  return undefined
}
