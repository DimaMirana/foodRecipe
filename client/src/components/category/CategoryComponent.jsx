import React , {useEffect} from 'react';
import axios from "axios";
import './category.scss';

function CategoryComponent() {
    useEffect(()=>{
        axios.get("/recipes/recipe/").then((res)=>{
            console.log(res.data);
        });
    },[])
    const data = {
      services: [
        {
          title: "Free Cocktails",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          title: "Endless Hiking",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          title: "Free Shuttle",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
        {
          title: "Strongest Beer",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
        },
      ],
    };
    return (
      <section className="category">
        <div className="category-center">
          {data.services.map((item, index) => {
            return (
              <article key={index} className="singleCategory">
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
}

export default CategoryComponent;
