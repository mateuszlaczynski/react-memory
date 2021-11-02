import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <h1>Start new game!</h1>
                <div className="btn-group">
                    <Link to='/play/8'>
                        <button className="btn">8 cards</button>
                    </Link>
                    <Link to='/play/16'>
                        <button className="btn">16 cards</button>
                    </Link>                    
                    <Link to='/play/24'>
                        <button className="btn">24 cards</button>
                    </Link>                    
                    <Link to='/play/32'>
                        <button className="btn">32 cards</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;