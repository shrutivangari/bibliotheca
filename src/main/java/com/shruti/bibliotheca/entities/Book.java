package com.shruti.bibliotheca.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private final String bookName;
    private final String status;
    private final String genre;

    public long getId() {
        return id;
    }

    public String getBookName() {
        return bookName;
    }

    public String getStatus() {
        return status;
    }

    public String getGenre() {
        return genre;
    }

    public Book() {
        this.bookName = "";
        this.status = "unread";
        this.genre = "";
    }

    public Book(String bookName, String status, String genre) {
        this.bookName = bookName;
        this.status = status;
        this.genre = genre;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", bookName='" + bookName + '\'' +
                ", status='" + status + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }
}
