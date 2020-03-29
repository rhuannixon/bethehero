const app = require('./src/server');
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`app runing on port ${port}`);