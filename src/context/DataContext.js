import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResult = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLocaleLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLocaleLowerCase()));
        setSearchResult(filteredResult.reverse());
    }, [posts, search]);

    return (
        <DataContext.Provider value={{
            search, setSearch, searchResult,
            fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    );
};;;

export default DataContext;