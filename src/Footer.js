import { useStoreState } from 'easy-peasy';

const Footer = () => {
    const postCount = useStoreState((state) => state.postCount);
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()} || You have {postCount} posts</p>

        </footer>
    );
};

export default Footer;