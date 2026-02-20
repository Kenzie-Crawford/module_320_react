import React from "react";
import img1 from "../assets/blog-image-1.jpg";
import img2 from "../assets/blog-image-2.jpg";  

function Article() {
    return (
        <>
        <article className="blog-post">
            <h2 className="blog-post-date">11/12/2013</h2>
            <h3 className="blog-post-title">On the Street in Brooklyn</h3>
            <img src={img1} alt="Blog Image 1" className="blog-post-image"/>
            <p className="blog-post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
            <a href="#" className="blog-post-link">Continues...</a>
        </article>

        

        <article className="blog-post">
            <h2 className="blog-post-date">11/11/2013</h2>
            <h3 className="blog-post-title">Vintage in Vogue</h3>
            <img src={img2} alt="Blog Image 2" className="blog-post-image"/>
            <p className="blog-post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
            <a href="#" className="blog-post-link">Continues...</a>
        </article>
        
        </>
        );
        }

export default Article;