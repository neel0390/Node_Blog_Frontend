import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
import SmallCard from "../Component/SmallCard";
import { store } from "./Details";

const Home = () => {
  const [detail] = useContext(store);
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            <Link to="/Technology">
              {" "}
              <img src={"https://as1.ftcdn.net/v2/jpg/00/92/68/78/1000_F_92687823_JJlbPUyN2WRqF5OVYG6WJFtoud9EJhBS.jpg"} alt="not found" />
            </Link>
          </div>
          <div className="home_right_container">
            <div className="home__sec">
              <Link to="/fitness">
                {" "}
                <img src={"https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGltYWxheWF8ZW58MHx8MHx8&w=1000&q=80"} alt="not found" />
              </Link>
            </div>

            <div className="home__thir">
              <Link to="/Food">
                {" "}
                <img src={"https://cdn.pixabay.com/photo/2021/02/23/11/06/mountains-6043079__340.jpg"} alt="not found" />
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "bollywood";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>
        <div className="home__left left1">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "technology";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>
        <div className="home__left left1">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "food";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Articles</h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "mix";
              })
              .map((item) => <Card key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>
        <div className="sidebar2">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "mix";
              })
              .map((item) => <SmallCard key={item.id} articleid={item.id} imgUrl={item.img} description={item.description.slice(0, 200)} title={item.title.slice(0, 25)} author={item.author} />)}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Stories</h1>
        <hr />

        <div className="home__left">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "footer1";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>

        <div className="home__left">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "footer2";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>

        <div className="home__left">
          {detail &&
            detail
              .filter((article) => {
                return article.category === "footer3";
              })
              .map((item) => <CardHome key={item.id} articleid={item.id} imgUrl={item.img} title={item.title} description={item.description.slice(0, 200)} author={item.author} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
