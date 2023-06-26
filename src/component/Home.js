import Hero from "./Hero";


const Home = () => {
    return(
        <>
            <Hero text="Movie Browser"/>
            <div className="row">
                <div className="col-8 offset-lg-2 my-5">
                    <p className="lead">
                        This is a simple movie browser application. Made using React Js. From Course on Udemy Named The Ultimate Fullstack Web Developement Bootcamp.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;