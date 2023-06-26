export class BlogPost {
  _authorName: string;
  _title: string;
  _text: string;
  _publicationDate: string;
  constructor(
    autorName: string,
    title: string,
    text: string,
    publicationDate: string
  ) {
    this._authorName = autorName;
    this._title = title;
    this._text = text;
    this._publicationDate = publicationDate;
  }
  writeBlog() {
    // console.log(
    //   '"' +
    //     this._title +
    //     '" titled by ' +
    //     this._authorName +
    //     " posted at " +
    //     this._publicationDate +
    //     "\n - " +
    //     this._text
    // );
    console.log(
      `\n"${this._title}" titled by ${this._authorName} posted at "${this._publicationDate}"\n   ${this._text}\n`
    );
  }
}
