const { Post } = require('../models');

const postData = [
    {
        title: "Runbuddy is now available!",
        post_content: "Run Buddy is an app that get you out of the gym and making friends",
        user_id: 3
    },
    {
        title: "Run Buddy reaches 1 million subscribers!",
        post_content: "1 million people are subscibed and running with friends all over the world.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "Stay on top off life with this easy to use scheduler",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "Lets talk about tech Baby!! Lets talk about all the good things and the bad things!!",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "The twitter for tech. All things tech news.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;