# MongoDB Query with Dot Notation in Nested Array

This repository demonstrates a bug encountered when querying a MongoDB collection with dot notation in a nested array field.  The query fails to return the expected document, highlighting a potential issue with how MongoDB handles this specific scenario.

## Problem Description

A document is inserted into a collection containing a nested array where one of the objects has a property with a dot (`.`) in its name. Attempting to query this document using the dot notation to access the nested property results in an unexpected failure.

## Solution

The solution involves using the `$elemMatch` operator to correctly query nested array elements while accounting for properties with dots in their names. 

## How to Reproduce

1. Clone this repository.
2. Install MongoDB.
3. Configure your MongoDB connection string in `bug.js`.
4. Run `bug.js` to reproduce the error.
5. Run `bugSolution.js` to see the solution in action.
