-- Create Database bloggers_db

-- Use bloggers_db

Create Table Blogs (
    post_id INT Primary Key Auto_Increment,
    title Varchar (100) NOT NULL,
    content Varchar (200) NOT NULL,
    header_image "" Not NULL ,
    author Varchar (200) NOT NULL, 
    publish_date DATE
);
