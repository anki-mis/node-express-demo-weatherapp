const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {c_id: 1, c_name: "maths"},
    {c_id: 2, c_name: "english"},
];

app.get('/', (req, res) => {
    console.log('from console.log -> hello world');
    res.send('Hello World, How are you doing today?');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    const course = courses.find(c => c.c_id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given id was not found');
    res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const name = { name: req.body.name};

    const result = schema.validate(name);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.message);
        return;
    }
    
    /*if (!req.body.name || req.body.name.length < 3) {
        //400 bad request
        res.status(400).send('Name is required and should be minimum 3 charachters long');
        return;
    }*/
    
    const course = {
        c_id: courses.length + 1,
        c_name: req.body.name
    };
    courses.push(course);    
    res.send(course);
});

//const port = PROCESS.env.PORT || 3000;
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//app.listen(3000, () => console.log(`Listening on port 3000...`));