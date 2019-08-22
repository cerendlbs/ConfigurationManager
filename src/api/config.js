let BASE_URL = 'http://localhost:8080/api'

const env = process.env.node_ENV.trim()

if (env === 'production') {
  BASE_URL = 'http://localhost:8080/api'
} else if (env === 'mock') {
  BASE_URL = ''
}

export {BASE_URL}
