const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.SECRETKEY;
const salt = 10;

const creatUser = async ( req, res ) => {
    const { name, email, password } = req.body;

    if( !name || !email || !password){
        res.status(400).json({ msg: 'Faltan paramatros obligatorios.', data: { name, email, password }  })
    }

    const passwordHash = await bcrypt.hash(password, salt);

    try {
        const newUser = new User({ name, email, password: passwordHash })
        await newUser.save();
        res.status(200).json({ msg: 'Usuario Creado', data: newUser})
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al crear el usuario.', data: {}})
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user){
            res.status(401).json({ msg : "El email no existe o no es valido.", data : {} });
        }

        const passwordOk = await bcrypt.compare( password, user.password );
        if(!password){
            res.status(401).json({ msg : "La contraseña es incorrecta.", data : {} });
        }

        const data = {
            userId : user._id,
            name : user.name,
            email : user.email
        }
        const token = jwt.sign(data, secretKey, {expiresIn: '1h'} );

        console.log(token);        

        res.status(200).json({ msg : "Se registró correctamente.", data : { jwt : token } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg : "Hubo un error al registrarse.", data: {} });
    }
}

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ msg: 'Ok', data: users });
}


const getUsersById = async ( req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if( user ){
            res.status(200).json({ msg: "Se encontró al usuario.", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario.", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al buscar al usuario.', data: {}})
    }
}

const deleteUserById = async ( req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if( user ){
            res.status(200).json({ msg: "Se borró al usuario correctamente.", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario.", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al querer borrar el usuario.', data: {}})
    }
}
const updateUserById = async ( req, res) => {
    const { id } = req.params;
    const { name, email, password} = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { name, email, password}, {new: true});
        if( user ){
            res.status(200).json({ msg: "Se encontró al usuario por ID correctamente.", data: user});
        } else {
            res.status(404).json({ msg: "No see encontró al usuario por ID.", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al querer actualizar el usuario.', data: {}})
    }
}


module.exports = { creatUser, login, getUsers, getUsersById, deleteUserById, updateUserById };