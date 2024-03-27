const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth.routes');
//const employeeRoutes = require('./Routes/employee.routes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

  app.get("/", (req, res)=>{
    res.send("Welcome to Employee Details")
  })

//Define routes
app.use('/auth', authRoutes);
//app.use('/employees', employeeRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));