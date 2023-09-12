import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({addToBookmarks, addReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])

    return (
        <div className="md:w-2/3">

            {
                blogs.map((blog) => <Blog blog={blog} key={blog.id} addToBookmarks={addToBookmarks} addReadingTime={addReadingTime}></Blog> )
            }

        </div>
    );
};

export default Blogs;