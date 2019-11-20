---
path: "/schema"
title: "Schema"
---

## GraphQL

```graphql
type Film{
	id: ID!
	title: String!
	description: String
	creator: Creator
	contributor: Contributor
}

type Creator{
	id: ID!
	name: String!
	role: Role
}

type Contributor{
	id: ID!
	name: String!
	role: Role
}

type Role{
	id: ID!
	label: String!
}
```
