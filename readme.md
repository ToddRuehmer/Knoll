# Knoll Tasks (probably change that)

## Back End
- This is a Razor Page Installation
    - The startup class that usually manages routing and other startup stuff is in program.cs (TODO: figure out why)

1. Run the SLN with IIS Express

## Front End
1. 'nvm use 20` *20.3.1*
2. `npm run start`
3. go to [localhost:9000](http://mocalhost:9000)

## Database
- Adding and retrieving todo items is performed by back end
    - `todoitems/add` *Adds one <TodoItem>*
    - `todoitems/get` *Lists all*

### TodoItem
```
{
    "Text": "Testing",
    "Status": {
        "Done": false,
        "Text": "Not Done"
    }
}
```

1. Open MongoDB Compass to view collections and items



## Next items
1. Connect listing and removing from front end to back end.
- Can only interface with Mongo via back end
- Use Axios
2. Add copy plugin and move wwwroot items to src.
- wwwroot should be empty in repo
3. ~~Set default status on new items to not done.~~



## Future
1. Multiple Lists