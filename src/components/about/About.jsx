import "./About.css";
import Award from "../../img/ChessBoard.png";

const About = () => {
return (
    <div className="a">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img
            src="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
            alt="Code Picture"
            className="a-img"
        />
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        This is a bunch of crap apsdofijaepoi fjapoeirjaspdofijapijertpa
        </p>
        <p className="a-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quis
        doloribus, magnam sed fugit perferendis possimus et labore debitis
        sunt minus. Consectetur qui doloremque consequuntur architecto totam
        in eligendi fugiat!
        </p>
        <div className="a-award">
        <img src={Award} alt="" className="a-award-img" />
        <div className="a-award-texts">
            <h4 className="a-award-title">
            The Award of The Awesome, 2001-Present
            </h4>
            <div className="a-award-desc">
            Helllo or sit amet consectetur, adipisicing elit.
            Temporibus culpa quis molestiae ducimus veritatis aperiam soluta
            tempora. Veritatis aut quos tenetur nesciunt. Impedit, asperiores
            incidunt mollitia consequatur ducimus perferendis dolorem.
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default About;
