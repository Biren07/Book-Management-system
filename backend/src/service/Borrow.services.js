import Book from "../model/Book.model.js"
import Borrow from "../model/Borrow.model.js";


export const borrowBookService=async(userId,bookId,dueDate)=>{
    const book=await Book.findById(bookId);
    if(!book||book.availabelCopies<=0)
    {
        throw new Error ('Book not available.');
    }
    book.availabelCopies-=1;
    await book.save();
    return Borrow.create({
        user:userId,
        book:bookId,
        dueDate
    });
}

export const  returnBookService=async(borrowId)=>{
    const borrow=await Borrow.findById(borrowId).populate("book");
    if(!borrow||borrow.status==='RETURNED'){
        throw new  Error ("Invalid return request");
    }
    borrow.status="RETURNED";
    borrow.returnDate=new Date();
    await borrow.save();
    borrow.book.availabelCopies +=1;
    await borrow.book.save();
    return borrow;
}