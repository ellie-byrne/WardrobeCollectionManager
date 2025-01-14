# Final Project Report: Wardrobe Collection Manager

**Ellie Byrne**

## Introduction

A collection manager serves as a powerful tool for organising, analysing, and interacting with collections of items. For this project, I have designed and implemented a Wardrobe Collection Manager. This application helps users keep track of their clothing items, categorise them by type of item, and leave reviews on each item. The project combines various technologies including Java SpringBoot, MongoDB, React, and ShadCN, forming a functional and scalable application. This report provides an overview of the design, implementation, testing, and reflection on the project.

## Installation

To activate the frontend:

1. run the commands `npm install` and `npm run dev` inside the `frontend` folder.

To activate the backend:

1. run the command `mvn spring-boot:run` inside the `backend` folder.

## Initiation and Design

### Design Requirements

The first step was to understand the functional requirements of the wardrobe collection manager. Through the use of “user personas”, I narrow down who the potential users would be and what data needed to be held and used.

### User Personas

#### Persona 1: Ellie, the person with too many clothes

As someone with too many clothes, I want to keep track of what clothes I have to make sure I don’t re-buy similar items and get rid of things that I don’t wear anymore with the end goal of donating things that don’t fit.

#### Persona 2: Jane, the minimalist

As someone likes to keep a concise wardrobe, I want to see if new items go with the items I already have to ensure that I don’t waste money on something I won’t wear often.

#### Persona 3: John, the travel planner

As someone who travels frequently, I want to be able to visually plan future outfits to prevent me from over or under packing.

### Data Requirements

The data requirements for the wardrobe collection manager involve storing the following information:
item name, type of item, shop link, store photo and review.
These data points are essential for providing the core functionalities, such as filtering items by item type, viewing item details, and adding reviews.

### System Design

#### Class Diagram

The system’s architecture is designed using object-oriented principles. I used mermaid to create a class diagram representing the backend of my project. 
Below are the main functional classes involved my app visually displayed by Mermaid and the code behind it.

![ClassDiagram](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/ClassDiagram.png)

Throughout this project, I have been able to demonstrate all the object oriented programming concepts, in particular a heavy use of inheritance and encapsulation. Conceptually, I was able in my final product produce this class structure for the backend, however it was appropriate to add extra classes to support the integration of Mongo's 'ObjectId' for routing.

```Python
classDiagram
    class Item {
        ObjectId _id
        String itemId
        String item
        String type
        String shopLink
        List~String~ filters
        String storePhoto
        List~String~ uploadedPhotos
        List~String~ review
    }

    %% Add-related classes
    class AddItem {
        +addItem(String item)
    }

    class AddItemService {
        +addItem(String item): void
    }

    class AddItemController {
        +addItem(String item): ResponseEntity
    }

    AddItem --> Item
    AddItemService --> Item
    AddItemController --> AddItemService

    %% Delete-related classes
    class DeleteItem {
        +deleteItem(String itemId)
    }

    class DeleteItemService {
        +deleteItem(String itemId): void
    }

    class DeleteItemController {
        +deleteItem(String itemId): ResponseEntity
    }

    DeleteItem --> Item
    DeleteItemService --> Item
    DeleteItemController --> DeleteItemService

    %% Review-related classes
    class Review {
        ObjectId _id
        String reviewText
        int rating
    }

    class ReviewService {
        +addReview(Review review): void
    }

    class ReviewController {
        +addReview(Review review): ResponseEntity
    }

    ReviewService --> Review
    ReviewController --> ReviewService

```

#### UML

![UML](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/UML.jpg)

The UML assisted in visualising how I wanted my frontend to look and function. In particular, I feel that this really helped me design an appropriate navbar and understand what I wanted my landing home page to be. Folling creating my UML, I decided that I wanted my add item to be my home page as that is the most relevant for a new user. For future development, I would love to integrate that new users land on the add item page and returning users land on the view item page.

## Implementation

The implementation of the wardrobe collection manager includes the backend development, frontend interface, and data handling.

### Database Design

The application uses MongoDB as the database to store and retrieve data. MongoDB has a NoSQL structure. This was a consious desicion as for should I want to scale this product this would allow shop vendors to add their items into the database directly in a user-friendly format.


### API Design

The backend has been implemented using Java Spring Boot, providing REST APIs to perform CRUD (Create, Read, Update, Delete) operations on the wardrobe items and reviews. The key API endpoints include:

POST “/“: Adds a new clothing item.

GET “/”: Retrieves all wardrobe items.

GET "/{_id}": Retrieves details of a specific wardrobe item.

PUT "/{id}": Updates a wardrobe item’s details.

DELETE "/delete-item/{itemId}": Deletes a wardrobe item.

### Interaction Design

The user interface design focuses on creating a user-friendly interface for managing wardrobe items providing intuitive controls and a responsive design.
In addition to being user-friendly, it was important to me that the website appropriately sized across devices so should I take the project further to becoming a mobile app, that it would still be easy to navigate.
early on in the front end development, I faced issues with formatting my NavBar (see below) however I was able to polish this through the use of tailwind to produce and aesthetic final product.

![NavbarDisplayIssues](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/NavbarDisplayIssues.png)

### Frontend Development

The frontend of the application was built using React and Vite, offering a modern and fast approach to building user interfaces. For the different UI components, I used ShadCN: ShadCN is not a component library but rather a collection of re-usable components that you are able to copy and paste into your apps. This provided a visually appealing and accessible design whilst still allowing me to manipulate components freely.

ShadCN did support in setting an aesthetic theme, however not without formatting difficulties. One of the challenges I faced was integrating a dropdown into my navbar, as the drop down wasn't centering properly. Although I thought this would be a quick fix it took several iterations of implementing different varients of tailwind paddings.

![EmptyItemPage](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/EmptyItemPage.png)

### Main Features

Wardrobe Items: Displays all items in a grid format, with filters to sort by type of item.

Item Details: Clicking on an item opens a detailed view where users can modify item information, edit and delete them.

Carousel: A rotating display of all clothing items, providing a visually engaging way to browse through items and plan outfits.

Form to Add/Update Items: Simple forms for adding new items with fields for: item name, shop link and store photo.

Dashboard: An interactive dashboard showing website usage.

I would've liked to fully implement the review functionality which would allow you to see all item reviews in the item detail however I didn't have time for this project. Again, I would've loved to make a fully fleshed out dashboard showing further details but wasn't able to for this project.

### Backend Development

The backend is built with Java Spring Boot, using MongoDB for the database. Each class (clothing-item, addItem, reviews) corresponds to a MongoDB collection, and the application makes use of Spring Data MongoDB for database interactions.

I built the backend first so would often check the backend host directly to ensure that data was being retrieved. In addition, to send test requests, I used postman which also assisted in debugging as should I not have recieved data, I would be able to debug by using the error codes such as a 404.

![BackendRequest](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/BackendRequest.png)

#### CRUD Operations

The CRUD operations are designed to allow users to:

- Create and update item details, such as name, shop link and store photo.

- Read wardrobe items by fetching them from the database and displaying them in the frontend.

- Delete items from the wardrobe collection.

## Testing

Initially, for this assignment I wanted to take a test-driven development approach where I would write the tests before the code. This would enable me to have more thorough test cases, become aware of issues early and avoid testing bias. However with this being the first frontend or backend development I have ever done, I was struggling to imagine what there would be to test in regard to what parameters I would be passing in. I adapted my plan to take a mindful approach of building my application with testing in mind.

### Manual Testing

I performed manual testing by interacting with the application and ensuring that the following features worked as expected:

- Adding, editing, and deleting wardrobe items.
- Filtering items by shop and rating.
- Adding and viewing reviews.

This was done largely through the use of console logs so I was able to debug whilst the application was running

![DebuggingDelete](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/DebuggingDelete.png)

I also learnt about HTTP Status Code errors. When developing the backend to check that my requests were working and processing, I used postman which would then return the HTTP Status error code. Most commonly my post mapping contained a typo.

![DebuggingFiltering](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/DebuggingFiltering.png)

### Unit Testing

Alongside my console logs, I implemented 5 unit tests. These were checking the functionality on the backend for: Getting all items, Getting items by type, Getting a single item, updating an item, getting a non-existent item. I found it difficult to test for a nonexistent item however felt it was important that if false requests was made that no data was returned.

## Reflection and Debugging

While the project was mostly successful, a few challenges were encountered. One of the key issues was ensuring that data entered through the frontend was correctly saved in the MongoDB database. Initially, there were issues with the data not syncing correctly between the frontend and backend, which was resolved by improving the API communication.

Another obstacle that took me a while to overcome was an issue I faced the first time I tried to work on my project from my work office. Eventually I discovered that I had configured the database to oly accept my home ip address which therefore prevented any of my requests going through. To resolve this, I reconfigured the database to be compatible with all databases.

Finally, for this project to be easy to access and submitted, I was left with no choice but to commit my `.env` file on the backend. I am aware that this is bad practice however for the ease of this submission I have committed it with intent to change the contents when I work on this further independently.

### Areas of improvement

Adding more advanced filtering options such as price and brand category, I would've also liked to implement a 'favourites' system which would be on the carousel page to support outfit ideas.

Adding the review form to the frontend - I was only able to complete the backend mapping. I felt that I learnt a lot from adding the review functionality as this was the first backend requests that I did due to the simplicity of them, although I wasn't able to incorporate them in the final product I felt that it made the process of adding the basic CRUD operations for items significantly easier.

Making a more interesting dashboard. I would've liked to incorporate the most frequently chosen items however for this to display well it would take sucha large sustained interaction with my website that it wasn't appropriate for the scale of this project.

## Conclusion

My wardrobe collection manager project successfully meets the requirements of the assignment. Through careful system design, interaction planning, and implementation, I created an application that allows users to track, review, and manage their wardrobe items. The use of Java Spring Boot, MongoDB, React, and ShadCN enabled me to create a functional, dynamic, and user-friendly application. This project not only helped me apply my technical skills but also provided valuable insights into the process of developing a data management system.
