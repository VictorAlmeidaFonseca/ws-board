const app = require('./app');
const wb = require('./ws')
  
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
})

const wss = wb(server)
