import MyInput from './UI/input/MyInput.jsx';
import MyButton from './UI/button/MyButton.jsx';
import {useState} from 'react';

const PostForm = ({create}) => {
    const [value, setValue] = useState({title: '', body: ''});
    const createNewPost = (e) => {
        e.preventDefault();
        if(!value.title || !value.body) return;
        create({id: Date.now(), ...value});
        setValue({title: '', body: ''});
    };

    return (
        <form>
            <MyInput
                value={value.title}
                onChange={(e) => setValue({...value, title: e.target.value})}
                type="text"
                placeholder='Название поста'
            />
            <MyInput
                value={value.body}
                onChange={(e) => setValue({...value, body: e.target.value})}
                type="text"
                placeholder='Описание поста'
            />
            <MyButton onClick={createNewPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;