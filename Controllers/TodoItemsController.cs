using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

public class TodoItemsController : Controller
{
    private readonly IMongoDatabase _database;

    public TodoItemsController(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("MongoDBConnection");
        var client = new MongoClient(connectionString);
        _database = client.GetDatabase("test");
    }

    public IActionResult Get()
    {
        // Retrieve items from the MongoDB collection
        var collection = _database.GetCollection<TodoItem>("todos");
        var items = collection.Find(new BsonDocument()).ToList();

        return Json(items);
    }

    [HttpPost]
    public IActionResult Add([FromBody] TodoItem item)
    {
        if (item == null)
        {
            return BadRequest("Invalid data");
        }

        var newItem = new TodoItem
        {
            Text = item.Text,
            Status = new Status
            {
                Done = item.Status.Done,
                Text = item.Status.Text
            }
        };

        var collection = _database.GetCollection<TodoItem>("todos");
        collection.InsertOne(newItem);

        var items = collection.Find(new BsonDocument()).ToList();

        return Json(items);
    }
}