# Nario - make your thinking visible

## Introduction
Nario is a team diary app for small dev project teams to share their thoughts and collaborate with each other during a project.

This app implements the following groups of business logic:

1. Registration and Authentication of users.
2. CRUD Operations
    i. create users, login, and get user details.
    ii. create, read, update and delate entries into the diary.
3. Searching and Filtering
4. Error and Exceptions handling
5. Persistent storage of users and entries in mongoDB

## User guide
### Home page 
1. Home page - a GET request to this URL resolves to this README page with instructions to use our app
    http://localhost:5000/

### Registration and Authentication
1. User registration - a POST to this endpoint will send user registration data
    http://localhost:5000/users

    User's name, email and password are required as url-encoded text.

2. Login - a POST request to this endpoint will verify the user's credential and generate a token to access entries routes
    http://localhost:5000/users/login

    User's email and password, which must match an already registered user is required.

3. Get current user - a GET to this endpoint returns the details of the current logged in user
    http://localhost:5000/users/me

    Authrization token from user login required.


### Making diary entries
1. Create entry - a POST to this endpoint will create an entry into out team diary
    http://localhost:5000/entries

    Entry body takes a JSON object, which includes the following fields: 
        _id, topic, content and status as strings, 
        tags and blockers as array of strings, 
        activityLogs as an array of objects containing activity and durations.
    Entry id must be a unique string, topic and content are required.
    Authrization token from user login required.

2. Read diary entries - a GET to this endpoint will fetch all entries in our diary, querry strings can be used to filter by content
    http://localhost:5000/entries

    Authrization token from user login required.

3. Update diary entries - a PATCH request to this endpoint will update the entry with the specified id
    http://localhost:5000/entries/:id

    New information body in JSON is required
    Authrization token from user login required.
    A user can only update entries that is made by them.

4. Delete entries - a DELETE request to this endpoint will delete the entry with the specified id
    http://localhost:5000/entries/:id

    Authrization token from user login required.
    A user can only delete entries that is made by them.


### Seacrh and Filter
1. Find entries by id - a GET to this endpoint will fetch the entry with the specifide id
    http://localhost:5000/entries/:id


## Demo day tasks
Register a user
Login
Get user info
Create diary entries
Get dairy emtries
Update diary entries
Delete diary entries
Search and find entries
Show some error handling
