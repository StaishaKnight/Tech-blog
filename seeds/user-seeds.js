const { User } = require('../models');

const userData = [
    {
        username: "Katie",
        twitter: "Kitekat",
        github: "katiekat",
        email: "katiekat@gmail.com",
        password: "password1"
    },
    {
        username: "Rue",
        twitter: "Rubyrue",
        github: "Rubtruw",
        email: "rubyrue@gmail.com",
        password: "password2"
    },
    {
        username: "Taylor",
        twitter: "Taylormade",
        github: "Taylormade",
        email: "taylormade@gmail.com",
        password: "password3"
    },
    {
        username: "Lady",
        twitter: "ladybug",
        github: "ladybug",
        email: "ladybug@gmail.com",
        password: "password4"
    },
    {
        username: "Levi",
        twitter: "Levidadjeans",
        github: "levidadjeans",
        email: "levidadjeans@gmail.com",
        password: "password5"
    },
    {
        username: "Susie",
        twitter: "susiesushi",
        github: "susisushi",
        email: "susiesushi@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;