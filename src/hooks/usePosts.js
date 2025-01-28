import {useMemo} from 'react';

// Сортировка постов
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]); // Зависимости: при изменении сортировки или постов массив пересчитается

    return sortedPosts;
};

// Поиск + сортировка
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const searchedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toUpperCase().includes(query.toUpperCase()));
    }, [query, sortedPosts]); // Зависимости: при изменении поискового запроса или сортированных постов массив пересчитается

    return searchedAndSortedPosts;
};