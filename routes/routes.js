const studentMiddleware = require('../middlewares/student');
const employeeMiddleware = require('../middlewares/employee');
const loginMiddleware = require('../middlewares/login');
const { signIn, welcome, refresh } = require('../middlewares/handlers')


const express = require('express');

apiRouter = express.Router();

apiRouter.post('/api/create', employeeMiddleware.create);
apiRouter.get('/api/', employeeMiddleware.getEmployee);
apiRouter.get('/api/read/:id', employeeMiddleware.getEmployeeById);
apiRouter.post('/api/update/:id', employeeMiddleware.updateEmployee);
apiRouter.delete('/api/delete/:id', employeeMiddleware.deleteEmployee);

apiRouter.post('/api/student_reg', studentMiddleware.studentReg);
apiRouter.get('/api/student', studentMiddleware.getStudent);
apiRouter.get('/api/student/:id', studentMiddleware.getStudentById);

apiRouter.post('/signin', signIn);
apiRouter.get('/welcome', welcome);
apiRouter.post('/refresh', refresh);

apiRouter.post('/api/login', loginMiddleware.login);
// apiRouter.post('/api/student_reg', studentMiddleware.studentReg);


module.exports = apiRouter;