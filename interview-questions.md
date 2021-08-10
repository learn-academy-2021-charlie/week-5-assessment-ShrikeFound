# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

### 1. Rails follows an MVC pattern. What does that mean?

**Your answer:**

rails follows a Model, View, Controller pattern, which means that it separates the concerns of the applications into those three areas: The Model, which interacts with the data, the View, which gives something for the user to see (or use as an api), and the controller which decides which of these things happen when certain routes are visited.

**Researched answer:**

rails separates a system into 3 parts: The Model, the View, and the Controller. The Model contains the data for the application. The View generates the user interface. Similar to how react can have components solely for rendering and other components that do logic, the view doesn't go any logic, and the model doesn't know anything about the interface. This means a model can be accessed by different views. The Controller receives requests from the user (usually routes), then decides which models and which views are used.

### 2. What is a relational database? Are there other kinds of databases?

**Your answer:**

A relational database is a database that organizes data as objects and the relationships between them. They use SQL, so they are also known as SQL databases, and are very structured (data is organized into tables). There are NOSQL databases, which instead rely on other methods of storage (like JSON). They are less structured. Unlike SQL databases, there is no requirement that each record have the same categories as another of the same type.

**Researched answer:**

Beause non-relational databases don't store their information in tables, they're useful for storing lots of information that can differ (like organizations that have different organizational structures, credit information, etc.). From what I understand, non-relational databases perform faster because all the necessary information might be found in the same object (as opposed to needed to join multiple related tables). In this way, relational databases trade speed for accuracy and consistency.

### 3. What is object-relational mapping?

Your answer: a method that lets you interact with data in a database as if it were objects in a programming language.

Researched answer: a method that lets us interact with data in a database as if it were objects in a programming language. Active Record is an ORM that lets us use ruby to refer to data as objects instead of writing SQL.

### 4. What is a gem?

**Your answer:**

a code library for ruby

**Researched answer:**

a code library for ruby that we can manage using RubyGems, similar to how we use npm or yarn. we can install and uninstall, and track dependencies.

### 5. What are primary keys? Why are they important?

**Your answer:**

primary keys are what we use to identify records in a SQL database table. They let us refer to unique records in a database and let us create relationships between records in different tables (we could use one record's foreign key and match it to another record's primary key).

**Researched answer:**

primary keys are unique and are often automatically generated. That's why the .find() method can return only one unique result.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

_1. RESTful routes:_ a set standard routes that we use to connect where the user goes and what an application does:

- index (/record) -- read in CRUD (all objects)
- show (/record/:record_id) -- read in CRUD (individual object)
- new (/record/new) -- create in CRUD (input new data)
- create (/record) -- create in CRUD (create with data)
- edit (/record/:record_id/edit) -- update in CRUD (input new data)
- update (/record/:record_id) -- update in CRUD (update with new data)
- destroy (/record/:record_id) -- destroy in CRUD (destroy indiviual object)

_2. JSON:_ javascript object notation, used to send data from an API

_3. ERB:_ embedded ruby, similar to JSX but is server-side.

_4. Params:_ similar to arguments, are passed as part of an HTTP request.

_5. API:_ application programming interface, lets us interact(interface) with an application by requesting and sending information.
