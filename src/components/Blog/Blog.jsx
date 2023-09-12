import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, addToBookmarks, addReadingTime}) => {

    return (
        <div className="mb-16 border-b-2 pb-5">
            <img src={blog.cover} alt="" />
            <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                    <img className="w-12" src={blog.author_img} alt="" />
                    <div className="font-bold">
                        <p >{blog.author}</p>
                        <p className="text-gray-500">{blog.post_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2'>
                    <p className="font-semibold text-gray-500">{blog.reading_time} min read</p>
                    <button onClick={() => addToBookmarks(blog)} ><FaBookmark/></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold my-4">{blog.title}</h2>
            <div className="flex gap-2 font-semibold text-gray-500">

                {
                    blog.hashtags.map((hash, idx) => <span key={idx}><a>{hash}</a></span>)
                }

            </div>
            <button onClick={() => addReadingTime(blog)} className='text-blue-600 font-bold mt-2 underline'>
                Mark as read
            </button>
            
        </div>
    );
};

export default Blog;