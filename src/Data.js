export const Users = [
    {
        id: 1,
        profilePicture: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
        username: 'Joanna Doe',
    },
    {
        id: 2,
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9ws0gy3eDtQYNprnMy7gblzFyV5Sv7jKhkbH9J1VzFxJkgW2WwONLdTqakxlDUmI6A4&usqp=CAU",
        username: 'Jordan Doe',
    },
    {
        id: 3,
        profilePicture: "https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg",
        username: 'Jeanne Doe',
    },
    {
        id: 4,
        profilePicture: "https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png",
        username: 'Jin Doe',
    },
    {
        id: 5,
        profilePicture: "https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png",
        username: 'Johnny Doe',
    },
    {
        id: 6,
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU",
        username: 'June Doe',
    }
]

export const Posts = [
    {
        id: 1,
        desc: "Hey Social friends! I've got an extra ticket for the BB concert. Anyone wanna come?",
        photo: "https://s3.amazonaws.com/sndb/uploads/photo/image/366393/large_IMG_2014.jpg",
        date: "10 minutes ago",
        userId: 1,
        like: 20,
        comment: 9,
    },
    {
        id: 2,
        desc: "Omg this pizza mad good. Take all my money😂  @ArticokeBasille'sPizza",
        photo: "https://i.pinimg.com/originals/3c/b6/26/3cb626e79ad01218140d96034e9d05c0.jpg",
        date: "2 minutes ago",
        userId: 2,
        like: 1,
        comment: 1,
    },
    {
        id: 3,
        desc: "Going to my first ju jitsu class! Wish me luck 😊",
        photo: "https://renzogracieacademy.com/wp-content/uploads/2019/09/Training-at-Renzo-Gracie-Academy-in-Midtown-Manhattan.jpg",
        date: "15 minutes ago",
        userId: 3,
        like: 20,
        comment: 0,
    },
    {
        id: 4,
        desc: "Litteraly just missed the bus...",
        photo: "https://image.newyorkcity.ca/wp-content/uploads/2012/02/bus-new-york-2.jpg",
        date: "10 minutes ago",
        userId: 4,
        like: 0,
        comment: 3,
    },
    {
        id: 5,
        desc: "Cute dog spotted.",
        photo: "https://pbs.twimg.com/media/EqcL0VIXcAUZVhm.jpg:large",
        date: "12 minutes ago",
        userId: 5,
        like: 34,
        comment: 1,
    },
    {
        id: 6,
        desc: "Going to see the long awaited sequel to Starwars! Super excited",
        photo: "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/3/8/1333438_amctheaters_546118.jpg",
        date: "3 minutes ago",
        userId: 6,
        like: 4,
        comment: 5,
    },
]


export const ProfilePosts = [
    {
        id: 1,
        desc: "Yo?",
        photo: "https://s3.amazonaws.com/sndb/uploads/photo/image/366393/large_IMG_2014.jpg",
        date: "10 minutes ago",
        userId: 1,
        like: 20,
        comment: 9,
    },
    {
        id: 2,
        desc: "Omg this pizza mad good. Take all my money😂  @ArticokeBasille'sPizza",
        photo: "https://i.pinimg.com/originals/3c/b6/26/3cb626e79ad01218140d96034e9d05c0.jpg",
        date: "2 minutes ago",
        userId: 2,
        like: 1,
        comment: 1,
    },
    {
        id: 3,
        desc: "Testing 12 12",
        photo: "https://renzogracieacademy.com/wp-content/uploads/2019/09/Training-at-Renzo-Gracie-Academy-in-Midtown-Manhattan.jpg",
        date: "15 minutes ago",
        userId: 3,
        like: 20,
        comment: 0,
    }
]

{/*
<li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="person" />
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://us.123rf.com/450wm/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200082/114296473-priest-avatar-icon-profession-logo-male-character-a-man-in-professional-clothes-people-specialists-f.jpg?ver=6" alt="person" />
          <span className="sidebarFriendName">John Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://media.istockphoto.com/vectors/avatar-men-icon-on-a-white-background-vector-id1250988021?k=20&m=1250988021&s=170667a&w=0&h=cmGxdxIcVXRrHZZz7VN7eMb0JudwsykAXIeqGHMMFzw=" alt="person" />
          <span className="sidebarFriendName">Josh Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt0bT0XouqWYQYFJHkfHj1VFa6Zm057wcFjQKrE-s0Kk8hWgn-PsYUAb_X9EU7oyHsnY&usqp=CAU" alt="person" />
          <span className="sidebarFriendName">James Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9ws0gy3eDtQYNprnMy7gblzFyV5Sv7jKhkbH9J1VzFxJkgW2WwONLdTqakxlDUmI6A4&usqp=CAU" alt="person" />
          <span className="sidebarFriendName">Jordan Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="person" />
          <span className="sidebarFriendName">Joanna Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="person" />
          <span className="sidebarFriendName">Jeremy Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="person" />
          <span className="sidebarFriendName">Jeanne Doe</span>
        </li>        
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU" alt="person" />
          <span className="sidebarFriendName">June Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png" alt="person" />
          <span className="sidebarFriendName">Johnny Doe</span>
        </li>
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png" alt="person" />
          <span className="sidebarFriendName">Jin Doe</span>
        </li>  
*/}