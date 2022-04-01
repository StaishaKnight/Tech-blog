const { User } = require('../models');

const userData = [
    {
        username: "scottie",
        twitter: "scottie",
        github: "scottie_2_hottie",
        email: "scottie_2_hottie@gmail.com",
        password: "password1"
    },
    {
        username: "lady_bug",
        twitter: "lady_bug",
        github: "ady_bug",
        email: "lady_bug@gmail.com",
        password: "password22"
    },
    {
        username: "slim_shady",
        twitter: "slim_shady",
        github: "slim_shady",
        email: "sslim_shady@gmail.com",
        password: "password333"
    },
    {
        username: "bruce_lee",
        twitter: "ruce_lee",
        github: "lruce_lee",
        email: "ruce_lee@gmail.com",
        password: "password4444"
    },
    {
        username: "patsy_melt",
        twitter: "patsy_melt",
        github: "patsy_melt",
        email: "patsy_melt@gmail.com",
        password: "password55555"
    },
    {
        username: "katie_kat",
        twitter: "katie_kat",
        github: "katie_kat",
        email: "katie_kat@gmail.com",
        password: "password666666"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;