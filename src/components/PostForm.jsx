import MyInput from './UI/input/MyInput.jsx';
import MyButton from './UI/button/MyButton.jsx';
import {useState} from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    // Получаем данные из инпутов путем двухстороннего связывания, и передаем в родительский компонент
    const addNewPost = (e) => {
        e.preventDefault();
        if (!post.title.length && !post.title.length) return;
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost); // передаем в родительский компонент
        setPost({title: '', body: ''});
    };



    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton
                style={{marginTop: 10}}
                onClick={addNewPost}
            >Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;