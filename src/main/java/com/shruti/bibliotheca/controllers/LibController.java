package com.shruti.bibliotheca.controllers;

import com.shruti.bibliotheca.entities.Book;
import com.shruti.bibliotheca.repositories.LibRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LibController {

    @Autowired
    private LibRepository libRepository;

    @GetMapping("/test")
    public String getTest() {
        return "Test";
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        System.out.println("Get URL invoked");
        return (List<Book>) libRepository.findAll();
    }

    @GetMapping("/book")
    public Book getBook(@RequestParam Long id) {
        return (Book) libRepository.findById(id).orElseGet(Book::new);
    }

    @PostMapping("/book")
    Book addBook(@RequestBody Book book) {
        System.out.println("POST URL invoked");
        libRepository.save(book);
        return book;
    }

    @PutMapping("/book")
    Book updateBook(@RequestBody Book book) {
        libRepository.save(book);
        return book;
    }

    @DeleteMapping("/book")
    void deleteBook(@RequestParam Long id) {
        libRepository.deleteById(id);
    }

    @GetMapping("/id")
    long getId() {
        return libRepository.count();
    }
}
