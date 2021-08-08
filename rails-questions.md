# ASSESSMENT 5: Database and Active Record Practical Questions

### 1. What is SQL?

SQL (Structured Query Language) is a domain-specific language designed to manage data in a relational database. PostgreSQL, MySQL, and SQLite are different database management systems that share the same basic language.

### 2. What the PostgreSQL query that would return all the content in a particular table?

```sql
SELECT *
FROM table
```

### 3. What is the command to create a new Rails application with a PostgreSQL database?

```ruby
rails new application_name -d postgresql
```

### 4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

```ruby
rails g model Meal breakfast lunch dinner
```

### 5. What is a migration? Why would you use one?

a migration is a sort of instruction that you can use to instruct rails in how to create and update a database.

### 6. What is the command to generate a migration file?

```ruby
rails g migration migration_name
```

### 7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

models should use the PascalCase, though the tables generated use snake_case (and are plural).

### 8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

the schema file holds the current schema of the database: an outline of the database with its tables. It's a file, so you can modify it directly, but you should NOT. That's what we use migrations for.

### 9. What is the Rails console?

The rails console is similar to IRB but lets us interact with our rails application and create/update models.

### 10. What is the Rails console command to see all the content in a particular table?

```ruby
    Model.all
```
