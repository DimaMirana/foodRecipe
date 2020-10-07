import React , {useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './category.scss';
import PaperComponent from '../paper/PaperComponent';

function CategoryComponent() {
    // useEffect(()=>{
    //     axios.get("/recipes/recipe/").then((res)=>{
    //         console.log(res.data);
    //     });
    // },[])
    const data = [
      {
        img: "https://i.ibb.co/RgCNG65/pizza.jpg",
        slug: "pizza",
      },
      {
        img: "https://i.ibb.co/5sP4Lp8/drinks.jpg",
        slug: "drinks",
      },
      {
        img: "https://i.ibb.co/7z0VkcG/burger.jpg",
        slug: "burger",
      },
      {
        img: "https://i.ibb.co/FqsqxCk/sweets.jpg",
        slug: "dessert",
      },
    ];
    
    return (
      <section className="category">
        <div className="category-center">
          {data.map((item, index) => {
            return (
              <>
                <Link to = {{pathname:`/recipe/${item.slug}`}}>
                  <PaperComponent img={item.img} slug={item.slug} />
                </Link>
              </>
            );
          })}
        </div>
      </section>
    );
}

export default CategoryComponent;
