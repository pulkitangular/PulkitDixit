var Books=function(id,Title,Price,Author){
    this.id=id;
    this.Title=Title;
    this.Price=Price;
    this.Author=Author;
}

var books=new Array();
var A1=new Books(1, "JavaScript", 5000, "Brendan Eich")
var B2=new Books(2, "Angular", 4500, "Misko Hevery")
var C3=new Books(3, "PHP", 4000, "Rasmus Lerdorf")
books.push(A1)
books.push(B2)
books.push(C3)

function AddBook(){
    var Title=_("Title").value;
    var Price=_("Price").value;
    var Author=_("Author").value;
    var index=_("index").value;
    var id=books.length+1;
   // console.log(index)
    if(index=="")
    {
    var book=new Books(id,Title,Price,Author);
    books.push(book);
    }
    else{
        var book=new Books(index,Title,Price,Author)
        books.splice(index-1,1,book)
    }
    BindBook(books)
    _("frm").reset()

}



function BindBook(books){

    var temp=``
    books.forEach(function(book,index){
        temp+=`<tr><td>${book.id}</td><td>${book.Title}</td><td>${book.Price}</td><td>${book.Author}</td><td><a onclick="editBook(${index})"><i class="fa fa-edit"></i></a><a onclick=DeleteBook(${index})><i class="fa fa-trash"></i></a></td></tr>`
    })
    var tbl=_("tbl");
    
    
    tbl.children[1].innerHTML=temp;
}

function _(ele_id){
    return document.getElementById(ele_id)
}

function DeleteBook(index){
    if(confirm("Are you sure to delete this book ?"))
    {
    books.splice(index,1);
    BindBook(books)
    }
}

function editBook(index)
{
    var book=books[index]

    _("Title").value=book.Title;
    _("Price").value=book.Price;
   _("Author").value=book.Author;
   _("index").value=book.id;

    //console.log(book)
}
_("btn_add").addEventListener("click", AddBook);






//BindBook(books)

window.addEventListener("load",function(){
    BindBook(books)
})