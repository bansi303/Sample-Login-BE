const jwt = require("jsonwebtoken")

const users = [{ id: 1, username: 'test1', password: 'test1', firstName: 'fn1', lastName: 'ln1' },
{ id: 2, username: 'test2', password: 'test2', firstName: 'fn2', lastName: 'ln2' },
{ id: 3, username: 'test3', password: 'test3', firstName: 'fn3', lastName: 'ln3' }];

async function authenticate({username, password}) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    const token = jwt.sign({ sub: user.id }, "This is my secret key", { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAllUsers(){
    return users.map(u => omitPassword(u))
}

module.exports = {
    authenticate,
    getAllUsers
}

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
