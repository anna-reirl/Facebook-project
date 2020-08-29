import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessangeSender';
import Post from './Post';
// import db from './firebase';
// import { useStateValue } from './StateProvider';

function Feed() {
// const [posts, setPosts] = useState([]);

// useEffect(() => {
//     db.collection('posts').onSnapshot((snapshot) => 
//         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
//         );
// }, []);

    
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {/* {posts.map(post => (
                <Post 
                key={post.id}
                profilePic={post.profilePic}
                message={post.message}
                timestamp={post.timestamp}
                username={post.username}
                image={post.image}

                />
            ))} */}
             <Post 
            profilePic="https://avatars2.githubusercontent.com/u/50011128?s=460&u=8cffea945a62d8933139f2b00460454466d35da8&v=4"
            message="“A real traveler has no definite plan and intention to come anywhere” - Lao Tzu."
            timestamp="This is a timestamp"
            username="Anna_Reil"
            image="https://34travel.me/media/posts/57dcf4650ea26-panarama.jpg"
            
            />
            <Post 
            profilePic="https://avatars2.githubusercontent.com/u/50011128?s=460&u=8cffea945a62d8933139f2b00460454466d35da8&v=4"
            message="Funny :)"
            timestamp="This is a timestamp"
            username="Anna_Reil"
            image="https://31.media.tumblr.com/81856d5b3368ce1385cd561559865f52/tumblr_nogas6TzIl1up0cf0o2_400.gif"/>

            <Post 
            profilePic="https://avatars2.githubusercontent.com/u/50011128?s=460&u=8cffea945a62d8933139f2b00460454466d35da8&v=4"
            message="Details..."
            timestamp="This is a timestamp"
            username="Anna_Reil"
            image="https://i.pinimg.com/originals/6d/31/39/6d3139585d9c786e9276145ee5d6f87c.jpg"/> */}

        </div>
    )
}

export default Feed
