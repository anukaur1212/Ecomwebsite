import React from 'react'
import user from '/src/Assets/img/avatar-2.jpg';

export const ReviewData = () => {
 
    const reviewList = [
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi rerum Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
            
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum. Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum. Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        },
        {
            img: user,
            name: 'Sarah J.',
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum. Lorem ipsum dolor sit amet, consectetur adipisicing eli Animi, rerum."
        }
    ]

    return {reviewList};
}

export default ReviewData