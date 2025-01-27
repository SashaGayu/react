import PostItem from './PostItem.jsx';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            {posts.length
                ? <h1 style={{textAlign: 'center'}}>{title}</h1>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;