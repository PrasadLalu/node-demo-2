const express = require('express');
const morgan = require('morgan');
const db = require('./app/models');
const app = express();

db.sequelize.sync();

// Body parser
app.use(express.json());

// Logging
app.use(morgan('dev'));

// Mount routes
app.use('/api/tasks', require('./app/routes/task.routes'));
app.use('/api/users', require('./app/routes/user.routes'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});