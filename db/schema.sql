Create Database bloggers_db

Use bloggers_db

Create Table Blogs (
    post_id INT Primary Key Auto_Increment,
    title Varchar (100) NOT NULL,
    content Varchar (200) NOT NULL,
    author Varchar (200) NOT NULL,
    publish_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP; 
    header_image Varchar (255) 
    );
INSERT INTO Blogs
VALUES ('First Post', 'This is the <strong>First</strong> post.', 'Ty', Default, Default, 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg');