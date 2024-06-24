import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [text]=useTypewriter({
        words:['Developer','Enthusiast'],
        loop:0,
        typeSpeed: 300, // Typing speed in milliseconds
        deleteSpeed: 100, // Deleting speed in milliseconds
        delaySpeed: 1000 // Delay between words in milliseconds
    });
  return (
    <section className="container-fluid ">
    <div className=" row  home-section">
        <div className="col-sm-6 heading pt-5 ">
            <h1 className="tophead mt-4 ms-5 fs-1">Hi,</h1>
            <h1 className="ms-5 mt-4 fs-1">I'm <span id="manas">Manas</span></h1>
            <h1 className="ms-5 mt-4 fs-1">Web <span  style={{color:'black'}}>{text}</span><Cursor/></h1>
            <NavLink to="/contact">
                <button className="btn btn-primary home-btn ms-5 mt-4 ">Contact</button>
            </NavLink>
        {/* <form action="/contact" method="get">
            <button className="btn btn-primary home-btn ms-5 mt-5">Contact</button>
        </form> */}
        </div>
        <div className="col-sm-6 img">
            <img src="/img.png" className="w-75 h-75 mt-5 ms-5 img-fluid" alt="not fetched"/>
        </div>
    </div>
</section>
  )
}

export default Home;