import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import {useState, useMemo} from 'react';
import PostFilter from './components/PostFilter.jsx';
import MyModal from './components/UI/modal/MyModal.jsx';
import MyButton from './components/UI/button/MyButton.jsx';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'b джейс'},
        {id: 2, title: 'PY', body: 'a змейс'},
        {id: 3, title: 'C++', body: 'c гейс'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);


    const sortedPosts = useMemo(() => {
        console.log('Функция sorted отработала');
        if (filter.sort) {
            return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)]);
    };

    return (
        <div className="App">
            <MyButton
            onClick={() => setModal(true)}
            >Создать пользователя</MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0px', border: '1px solid rgb(51, 51, 51)'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPost}/>
        </div>
    );
}

export default App;
