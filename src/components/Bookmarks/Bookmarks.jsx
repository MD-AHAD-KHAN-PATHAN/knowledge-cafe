import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {

    

    return (

        <div className="md:w-1/3 ml-4">
            <div className="text-blue-500 text-2xl font-semibold bg-slate-300 mb-4 p-4 rounded-lg">
                <h3>Spent time on read : {readingTime} </h3>
            </div>
            <div className="bg-slate-300 p-4 rounded-lg">
                <h2 className="text-3xl font-bold my-5">Bookmarks Blog : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

export default Bookmarks;