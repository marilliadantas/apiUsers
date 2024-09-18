const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [
    {
        id: '1',
        firstname: 'John',
        lastname: 'Peter',
        email: 'john@gmail.com',
    }
]

const getAllUsers = (req, res) => {
    res.status(200).json(users);
}

const getUserById = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if(!user) {
        return res.status(404).json({ alert: 'Usuário não encontrado.' });
    }
        res.status(200).send(user);
}

const createUser = (req, res) => {
    const user = {
        id: uuidv4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }

    if(user.firstname && user.lastname && user.email && user.password) {
        users.push(user);
        res.status(201).json({ 
            msg: 'Usuário cadastrado com sucesso!',
            user: {
                id: user.id
            }
        });
    } else {
        res.status(400).json({ alert: 'Todos os campos são obrigatórios.' });
    }
}

const updateUserById = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if(!user) {
        return res.status(404).json({ alert: 'Usuário não encontrado.' });
    } 
    if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
        return res.status(400).json({ alert: 'Todos os campos são obrigatórios.' });
    }
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.email = req.body.email
        user.password = req.body.password
        res.status(200).send(user);
}

const deleteUser = (req, res) => {
    const index = users.findIndex(user => user.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ alert: 'Usuário não encontrado.' });
    }

    users.splice(index, 1);

    res.status(200).json({ msg: 'Usuário deletado com sucesso!' });
};

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUser);

module.exports = router;