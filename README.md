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
Wardrobe Item: Name, type of item, shop link, store photo and review.
Review: Rating (1 to 5) and comments.
These data points are essential for providing the core functionalities, such as filtering items by item type, viewing item details, and adding reviews.

### System Design

#### UML

![UML](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/UML.jpg)

#### Class Diagram

The system’s architecture is designed using object-oriented principles. I used mermaid to create a class diagram representing the backend of my project. 
Below are the main functional classes involved my app visually displayed by Mermaid and the code behind it.

![ClassDiagram](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/ClassDiagram.png)

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

## Implementation

The implementation of the wardrobe collection manager includes the backend development, frontend interface, and data handling.

### Database Design

The application uses MongoDB as the database to store and retrieve data. MongoDB has a NoSQL structure.

### API Design

The backend is implemented using Java Spring Boot, providing REST APIs to perform CRUD (Create, Read, Update, Delete) operations on the wardrobe items and reviews. The key API endpoints include:

POST “/“: Adds a new clothing item.

GET “/”: Retrieves all wardrobe items.

GET "/{_id}": Retrieves details of a specific wardrobe item.

PUT "/{id}": Updates a wardrobe item’s details.

DELETE "/delete-item/{itemId}": Deletes a wardrobe item.

### Interaction Design

The user interface design focuses on creating a user-friendly interface for managing wardrobe items providing intuitive controls and a responsive design.

### Frontend Development

The frontend of the application was built using React and Vite, offering a modern and fast approach to building user interfaces. For the different UI components, I used ShadCN: ShadCN is not a component library but rather a collection of re-usable components that you are able to copy and paste into your apps. This provided a visually appealing and accessible design whilst still allowing me to manipulate components freely.

![NavbarDisplayIssues](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/NavbarDisplayIssues.png)

![EmptyItemPage](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/EmptyItemPage.png)

### Main Features

Wardrobe Items List: Displays all items in a grid format, with filters to sort by shop, type of item and review rating.

Item Details: Clicking on an item opens a detailed view where users can modify item information, view associated reviews, edit and delete them.

Carousel: A rotating display of all clothing items, providing a visually engaging way to browse through items and plan outfits.

Form to Add/Update Items: Simple forms for adding new items with fields for: item name, shop link and store photo.

### Backend Development

The backend is built with Java Spring Boot, using MongoDB for the database. Each class (clothing-item, addItem, reviews) corresponds to a MongoDB collection, and the application makes use of Spring Data MongoDB for database interactions.

![BackendRequest](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/BackendRequest.png)

#### CRUD Operations

The CRUD operations are designed to allow users to:

- Create and update item details, such as name, shop link and store photo.

- Read wardrobe items by fetching them from the database and displaying them in the frontend.

- Delete items from the wardrobe collection.

## Testing

Initially, for this assignment I wanted to take a test-driven development approach where I would write the tests before the code. This would enable me to have more thorough test cases, become aware of issues early and avoid testing bias. However with this being the first frontend or backend development I have ever done I was struggling to imagine what there would be to test in regard to what parameters I would be passing in. I adapted my plan to take a mindful approach of building my application with testing in mind.

### Manual Testing

I performed manual testing by interacting with the application and ensuring that the following features worked as expected:
Adding, editing, and deleting wardrobe items.
Filtering items by shop and rating.
Adding and viewing reviews.
This was done largely through the use of console logs so I was able to debug whilst the application was running

![DebuggingDelete](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/DebuggingDelete.png)

![DebuggingFiltering](https://github.com/ellie-byrne/WardrobeCollectionManager/blob/master/docs/DebuggingFiltering.png)

### Unit Testing

Alongside my console logs, I implemented 5 unit tests. These were checking the functionality on the backend for: Getting all items, Getting items by type, Getting a single item, updating an item, getting a non-existent item. I found it difficult to test for a nonexistent item however felt it was important that if false requests was made that no data was returned.

## Reflection and Debugging

While the project was mostly successful, a few challenges were encountered. One of the key issues was ensuring that data entered through the frontend was correctly saved in the MongoDB database. Initially, there were issues with the data not syncing correctly between the frontend and backend, which was resolved by improving the API communication.

### Areas of improvement

Adding more advanced filtering options such as price range and item category. Adding the review form to the frontend - I was only able to complete the backend mapping. Making a more interesting dashboard. Enhancing the UI for mobile devices to ensure a seamless experience across all platforms.

## Conclusion

My wardrobe collection manager project successfully meets the requirements of the assignment. Through careful system design, interaction planning, and implementation, I created an application that allows users to track, review, and manage their wardrobe items. The use of Java Spring Boot, MongoDB, React, and ShadCN enabled me to create a functional, dynamic, and user-friendly application. This project not only helped me apply my technical skills but also provided valuable insights into the process of developing a data management system.
