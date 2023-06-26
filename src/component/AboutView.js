import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="MovieFlix" />
      <div className="row">
        <div className="col-lg-8 offset-lg-2 my-3">
          <p className="lead">
              Welcome to MovieFlix, your ultimate destination for discovering and enjoying a wide variety of movies! With our user-friendly movie browser, you can explore an extensive collection of films across genres, eras, and languages, all at your fingertips.
          </p>
        </div>

        <div className="col-lg-8 offset-lg-2 my-3">
          <p className="lead">
            Start by navigating to the "Search" section, where you'll find a range of options to refine your search. Whether you're in the mood for action-packed blockbusters, heartwarming romantic comedies, thought-provoking documentaries, or spine-tingling horror flicks, our movie browser has got you covered. You can also filter by release year, director, cast, and even ratings to tailor your movie-watching experience to your preferences.
          </p>
        </div>

        <div className="col-lg-8 offset-lg-2 my-3">
          <p className="lead">
          MovieFlix is not just about watching movies; it's about fostering a vibrant community of film enthusiasts. Engage in lively discussions, share your opinions, and read reviews from fellow movie lovers in our dedicated community forum. Expand your cinematic knowledge, discover new perspectives, and connect with like-minded individuals who share your passion for the silver screen.
          </p>
        </div>

        
      </div>
    </>
  );
};

export default AboutView;
