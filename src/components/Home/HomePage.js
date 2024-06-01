import { useSelector } from 'react-redux';
import videoHomePage from '../../asset/video-homepage.mp4';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);
    const navigate = useNavigate();

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
                    {isAuthenticated
                        ? <button onClick={() => navigate('/users')}> Doing Quiz Now </button>
                        : <button onClick={() => navigate('/login')}> Get's started. It's free. </button>
                    }
                </div>

            </div>
        </div>
    )
}

export default HomePage;