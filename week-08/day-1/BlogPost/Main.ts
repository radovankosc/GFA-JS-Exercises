import { BlogPost } from "./BlogPost";
import { Blog } from "./Blog";
import { Console } from "console";
let b1Title: string = "Lorem Ipsum";
let b1AutorName: string = "John Doe ";
let b1Text: string = "Lorem ipsum dolor sit amet.";
let b1PublicationDate: string = "2000.05.04.";

let b2Title: string = "Wait but why";
let b2AutorName: string = "Tim Urban";
let b2Text: string =
  "A popular long-form, stick-figure-illustrated blog about almost everything.";
let b2PublicationDate: string = "2010.10.10.";

let b3Title: string = "One Engineer Is Trying to Get IBM to Reckon With Trump";
let b3AutorName: string = "William Turton";
let b3Text: string =
  "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.";
let b3PublicationDate: string = "2017.03.28.";

let blog1 = new BlogPost(b1AutorName, b1Title, b1Text, b1PublicationDate);
let blog2 = new BlogPost(b2AutorName, b2Title, b2Text, b2PublicationDate);
let blog3 = new BlogPost(b3AutorName, b3Title, b3Text, b3PublicationDate);
let blog4 = new BlogPost(b3AutorName, b2Title, b1Text, b1PublicationDate);
// blog1.writeBlog();
// blog2.writeBlog();
// blog3.writeBlog();

let blog = new Blog();
blog.add(blog1);
blog.add(blog2);
blog.add(blog3);
console.log(blog._listOfBlogsPost[1]); // print the first object in Array
console.log(blog); // prints the array where are 3 objects nested

blog.delete(2);
console.log(blog);

blog.update(1, blog4);
console.log(blog._listOfBlogsPost[1]);
