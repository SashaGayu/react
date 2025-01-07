import PostItem from './PostItem.jsx';

const PostList = ({posts, remove}) => {
    return (
        <div>
            {posts.length ?
                <h1 style={{textAlign: 'center', margin: '40px 0'}}>Посты</h1>
                :
                <h1 style={{textAlign: 'center', margin: '40px 0'}}>Посты не найдены</h1>
            }
            {posts.map((post, index) => <PostItem remove={remove} post={post} number={index + 1} key={post.id}/>)}
        </div>
    );
};

export default PostList;