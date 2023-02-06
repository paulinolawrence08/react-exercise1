//Call all functions inside services and log updated value/s
import { getPosts, addPost, getPostsByUser, getPostById, updatePostTitle, updatePostBody, updatePost, deletePostById, deletePostsByUserId} from "./services/posts";
import { updateUser, getAllUsers, addUser, getUserById} from "./services/users";
import { addComment, getCommentById, updateCommentBody, getCommentsByPostId, deleteCommentById, getAllComments} from "./services/comments";

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());

//Paulino - Exercise 1 CDP Full Stack Batch 04-22
//Solution for users.js methods
let geo = {lat: "-88.3159", lng: "77.1496",}
let address = {street: "Perseus Street", suite: "B406", city: "Marilao", zip: "3019", geo};
let company = {name: "Seven seven"}
let newUserInfo = {name: "Lawrence Dave V. Paulino", username: "Ace", email: "paulino@77.com",
                    address, phone: "1321-3213", website: "Ace.biz", company};
addUser(newUserInfo);
console.log(getAllUsers());
console.log(getUserById(11));


//Solution for post.js methods
console.log(getPosts());

let newPost = { userId: 11, title: "Perseverance", body: "Perseverance is the key to success..."};
addPost(newPost);
console.log(getPosts());

updatePostTitle(101, "Persevere towards your goal");   
console.log(getPostById(101));

updatePostBody(101, "You must always have the perseverance...")
console.log(getPostsByUser(11));

updatePost(101, {title: "Faith and Perseverance", body: "Not just perseverance but faith in God is the most important..."});
console.log(getPostById(101));

var deletePost = deletePostById(100);
console.log(deletePost);
deletePost = deletePostsByUserId(10);
console.log(deletePost);


//Solution for comments.js methods
let newComment = {postId: 101, name: "Best Post", email: "bestpost@gmail.com", body: "I think this is the best post since it talks about..."};
addComment(newComment);
console.log(getCommentById(501));

updateCommentBody(501, "This is the best beacuse it shows how...");
console.log(getCommentsByPostId(101));

const deleteComment = deleteCommentById(500);
console.log(deleteComment);

















