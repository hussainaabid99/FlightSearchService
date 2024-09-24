const express = require('express');
const apiRoutes = require('./routes');
const { PORT } = require('./config/serverConfig');
const db = require('./models/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
     console.log(`Server started on PORT ${PORT}`);

     if (process.env.DB_SYNC == "true") {
          db.sequelize.sync({
               alter: true
          })
     }
})