import './styles/App.css';
import {useEffect, useMemo, useState} from 'react';
import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import PostFilter from './components/PostFilter.jsx';
import MyModal from './components/UI/MyModal/MyModal.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import {usePosts} from './hooks/usePosts.js';
import axios from 'axios';

function App() {
    // Юзаю кастомный хук для сортировки и поиска постов
    const [posts, setPosts] = useState([]);

    // Состояние для хранения значений фильтрации: поисковый запрос (query) и тип сортировки (sort)
    const [filter, setFilter] = useState({query: '', sort: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [filter]);

    // Функция добавления нового поста
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
    }

    // Функция удаления поста
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>GET POSTS</MyButton>

            {/*Кнопка для создания постов*/}
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}
            >Создать пользователя</MyButton>

            {/*Модальное окно*/}
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                {/* Форма для создания нового поста */}
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '20px 0'}}/>

            {/* Фильтрация и сортировка постов */}
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {/* Список постов с фильтрацией и сортировкой */}
            <PostList
                posts={sortedAndSearchedPosts}
                remove={removePost}
                title="Список постов"
            />
        </div>
    );
}

export default App;
