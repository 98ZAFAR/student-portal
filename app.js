const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const registrationRouter = require('./routes/registrationRoutes.js');
const profileRouter = require('./routes/profileRoutes.js');
const adminRouter = require('./routes/adminRoutes.js');
const authRouter = require('./routes/authRoutes.js');
const calculateRouter = require('./routes/sgpaRouter.js');
const subjectRouter = require('./routes/subjectRouter.js');
const marksRouter = require('./routes/marksRoutes.js');
const studentsRouter = require('./routes/studentRoutes.js');
const departmentRouter = require('./routes/Department/departmentRoutes.js');
const courseRouter = require('./routes/Course/courseRoutes.js');
const semesterRouter = require('./routes/Semester/semesterRoutes.js');
const requestLogger = require('./middlewares/requestLogger');
const { verifyToken } = require('./middlewares/authMiddleware.js');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(requestLogger);

app.use('/api/auth', authRouter);
app.use(verifyToken);
app.use('/api/register', registrationRouter);
app.use('/api/profile', profileRouter);
app.use('/api/admin', adminRouter);
app.use("/api/subjects", subjectRouter);
app.use('/api/marks', marksRouter);
app.use('/api/calculate', calculateRouter);
app.use('/api/students', studentsRouter);
app.use('/api/departments', departmentRouter);
app.use('/api/courses', courseRouter);
app.use('/api/semesters', semesterRouter);

module.exports = app;