import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div>
            <header className="flex justify-between items-center border-b-2 mt-2">
                <h1 className="font-semibold text-4xl">Knowledge Cafe</h1>
                <img className='mb-4' src={profile} alt="" />
            </header>
        </div>
    );
};

export default Header;