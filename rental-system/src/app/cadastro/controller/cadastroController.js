const bcrypt = require('bcrypt');

async function checaEmail(email) {
    const usuarios = await fetch("http://localhost:3000/api/usuarios").then((res) => res.json());
    return usuarios.some((usuario) => usuario.email === email);
}

function getHashSenha(senha) {
    return bcrypt.hash(senha, 10);
}