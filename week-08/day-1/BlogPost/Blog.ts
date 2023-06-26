// store a list of BlogPosts
// and has the following methods:
// add(BlogPost) -> adds a BlogPost to the list
// delete(int) -> deletes the BlogPost from the given index
// update(int, BlogPost) -> replaces an item at the given index with a new BlogPost
import { BlogPost } from "./BlogPost";
export class Blog {
  _listOfBlogsPost: BlogPost[];
  constructor() {
    this._listOfBlogsPost = [];
  }
  add(blogPost: BlogPost) {
    this._listOfBlogsPost.push(blogPost);
  }
  delete(index: number) {
    this._listOfBlogsPost.splice(index, 1);
  }
  update(index: number, blogPost: BlogPost) {
    this._listOfBlogsPost.splice(index, 1, blogPost);
  }
}
