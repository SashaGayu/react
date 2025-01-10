import PostItem from './PostItem.jsx';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {useRef} from 'react';

const PostList = ({posts, remove}) => {
    return (
        <div>
            {posts.length ?
                <h1 style={{textAlign: 'center', margin: '40px 0'}}>Посты</h1>
                :
                <h1 style={{textAlign: 'center', margin: '40px 0'}}>Посты не найдены</h1>
            }
            <TransitionGroup>
                {posts.map((post, index) => {
                    const nodeRef = useRef(null);
                    return (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        nodeRef={nodeRef}
                    >
                        <div ref={nodeRef}>
                            <PostItem remove={remove} post={post} number={index + 1}/>
                        </div>
                    </CSSTransition>
                );})}
            </TransitionGroup>
        </div>
    );
};

export default PostList;