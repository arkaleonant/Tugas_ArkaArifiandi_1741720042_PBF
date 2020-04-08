import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete"

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts',dataYgDikirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts',dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;