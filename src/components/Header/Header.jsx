
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-10 border-b-2'>
            <h1 className='text-5xl font-bold text-center mt-5'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;