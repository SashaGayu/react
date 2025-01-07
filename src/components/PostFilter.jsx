import MyInput from './UI/input/MyInput.jsx';
import MySelect from './UI/select/MySelect.jsx';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                defaultValue="Сортировка"
                onChange={item => setFilter({...filter, sort: item})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;