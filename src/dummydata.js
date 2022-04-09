import Post1 from './assets/images/post1.jpg';
import Post2 from './assets/images/post2.jpeg';
import Post3 from './assets/images/post3.jpg';
import Profilepic1 from './assets/images/person.png';
import Profilepic2 from './assets/images/person2.png';
import Profilepic3 from './assets/images/person3.jpg'


export const Users =[
    {
        id: 1,
        profilePicture: Profilepic1,
        username: "Marry Loe",
    },
    {
        id:2 ,
        profilePicture:Profilepic2,
        username:"John Doe",
    },
    {
        id: 3,
        profilePicture: Profilepic3,
        username: "Marry Loe",
    }
];
export const Posts = [
    {
        id: 1,
        desc: "Love this world",
        photo:Post1,
        date: '5 mins ago',
        userId: 1,
        like:36,
        comment:10,
    },
    {
        id: 2,
        desc: "Art is life",
        photo:Post2,
        date: '45 mins ago',
        userId: 2,
        like:436,
        comment:110,
    },
    {
        id: 3,
        desc: "Worship all",
        photo:Post3,
        date: '22-Mar-2022',
        userId: 3,
        like:360,
        comment:108,
    }
];