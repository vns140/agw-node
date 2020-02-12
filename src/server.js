const {PORT}  = require('./config/server')
const app = require('./app')

app.listen(PORT || 3000, () => console.log(`App is running on port ${PORT || 3000}`));

