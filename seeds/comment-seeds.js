const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Fantastic News!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Good to Know!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Good Work!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Congrats on 1 Million"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Awesome news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: " Love to see it!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Awesome!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Keep up the good work!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;