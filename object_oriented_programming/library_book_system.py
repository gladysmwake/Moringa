class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_available = True

    def borrow(self):
        if self.is_available:
            self.is_available = False
            return True
        return False

    def return_book(self):
        self.is_available = True

    def __str__(self):
        availability = "Available" if self.is_available else "Not Available"
        return f"Title: {self.title}, Author: {self.author}, ISBN: {self.isbn}, Status: {availability}"
    
book1 = Book("Atomic Habits", "James Clear", "12345")
book1.borrow()
print(book1)

book2 = Book("The 7 Habits of Highly Effective People", "Stephen Covey", "67890")
print(book2)
    