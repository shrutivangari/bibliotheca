# Bibliotheca
A library of the collection of books at Kashru's place

## Tech Stack

- [x] Backend:
    - [x] Java 11
    - [x] Spring Boot
    - [x] REST
- [x] DB
    - [x] H2 (In memory DB)
- [x] Frontend:
    - [x] Nodejs (v12.0)
    - [x] AngularJS
    - [x] Bootstrap 4
    - [x] Typescript
#TODO
- [] External integrations
    - [] Google Books API OR
    - [x] Goodreads API (https://www.goodreads.com/api)
    Example: `https://www.goodreads.com/search/index.xml?key=gV98RSIy6o8SiVuT2218GA&q=HARRY%20POTTER`
- [] Features
    - [] Add support for query by name and not just ID
    - [] (Nice to Have) POST/PUT should return a response

# How to Run the application
1. Run the Java backend application (Spring boot) `java com.shruti.bibliotheca.Application`

Example:
`/Library/Java/JavaVirtualMachines/jdk-11.0.3.jdk/Contents/Home/bin/java -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=51187 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=localhost  -Dspring.application.admin.enabled=true -Dspring.jmx.enabled=true --enable-preview -Dfile.encoding=UTF-8 @/var/folders/zh/9_cm2dm52m37mbnzcmgzjx9y159kh/T/cp_3ddgp5ddv4ozoefi79zj14l33.ar gfile com.shruti.bibliotheca.Application`

a. To test if the application is up and running, navigate to http://localhost:8080/test
You will see a test page

b. To run the actual library backend REST API, go to:
Navigate to http://localhost:8080/books
You will see sample books with their id, book name, status and genre

2. This application is running on the H2 database, the play with the H2 console
Navigate to http://localhost:8080/h2
You will see a GUI with the h2 connection settings. Enter the password to login and interate with the embedded H2 database

3. Run the frontend application (Angular Js)
Cd into the angularclient folder
Run `npm install`
Run `npm audit fix` to fix vulnerabilities
Run `ng serve`

Navigate to http://localhost:4200