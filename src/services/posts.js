import { posts as data } from "../data/posts";
import { generateId } from "../utils";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.find((post) => post.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((post) => post.id === id);
}

export function addPost(post) {
  const { userId, title, body } = post;
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  let newPost = {userId, id: generateId(getPosts()), title, body};
  return posts.push(newPost);
}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((post) => {
    if (post.id === id) {
      return {
        ...post, // post properties
        title, // new title
      };
    }
    return post;
  });
}

export function updatePostBody(id, body) {
  //update post body
  posts = posts.map((post) => {
    if (post.id === id) {
      return {
        ...post, // post properties
        body, // new body
      };
    }
    return post;
  });
}

export function updatePost(id, editedPost) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  posts = posts.map((post) => {
    if (post.id === id) {
      return {
        ...post, // post properties
        ...editedPost, // new post
      };
    }
    return post;
  });
}

export function deletePostById(id) {
  //delete post by id
  return posts.filter((post) => post.id !== id);
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  return posts.filter((post) => post.userId !== userId);
}
