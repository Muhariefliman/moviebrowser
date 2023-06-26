import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="row">
        <div className="col-lg-8 offset-lg-2 my-5">
          <p className="lead">
            Made By Muhamad Arief Liman in Section 201 React Js, The Ultimate Fullstack Web Developement Bootcamp on Udemy.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutView;
