import { useSelector } from 'react-redux';
import videoHomePage from '../../asset/video-homepage.mp4';

const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);
    const account = useSelector(state => state.loginUser.account);

    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='homepage-slogan'>
                    There's a better way to ask
                </div>
                <div className='homepage-message'>
                    You don't want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make everyone happy.
                </div>
                <div className='homepage-getstarted'>
                    <button>Get's started. It's free.</button>
                </div>

            </div>
        </div>
    )
}

export default HomePage;