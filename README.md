# Blog App

This is a simple blog application built with Vue.js. The application allows users to create, edit, view, and delete blog posts. Each post contains a title, content, image, and a time tracker to record the time spent on the post.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)


## Features
- Add new blog posts with title, content, and image.
- Edit existing blog posts.
- View detailed blog post information.
- Delete blog posts.
- Time tracking functionality for each post.

## Project Structure

├── public
│ ├── index.html
│ └── ...
├── src
│ ├── assets
│ │ └── images
│ │ ├── image1.jpg
│ │ ├── image2.jpg
│ │ └── ...
│ ├── components
│ │ ├── AddPost.vue
│ │ ├── BlogHome.vue
│ │ ├── EditPost.vue
│ │ ├── NavBar.vue
│ │ ├── PostDetail.vue
│ │ └── PostList.vue
│ ├── router
│ │ └── index.js
│ ├── store.js
│ │ 
│ ├── App.vue
│ ├── main.js
│ └── ...
├── README.md
└── package.json

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. ## Running the Application
After installing the dependencies, you can run the application with the following command:

```bash
npm run serve
```
This will start a development server and you can view the application in your browser at http://localhost:8080.

4. ## Usage

Adding a Post :
Navigate to the home page.
Click the "Add Post" button.
Fill out the form with the title, content, and optionally upload an image.
Use the start and stop buttons to record the time spent on the post.
Click the "Save Post" button to save your post.

Editing a Post : 
Navigate to the post you want to edit by clicking on it from the home page.
Click the "Edit" button.
Update the post's title, content, image, and continue recording time if necessary.
Click the "Update Post" button to save changes.

Deleting a Post:
Navigate to the post you want to delete by clicking on it from the home page.
Click the "Delete" button.

Viewing Posts:
All posts are listed on the home page.
Click on any post to view its details.

Dependencies:
Vue.js
Vue Router
Vuex
