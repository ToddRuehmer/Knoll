using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class TodoItem
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Text { get; set; }
    public Status Status { get; set; }
}

public class Status
{
    public Boolean Done { get; set; }
    public string Text { get; set; }
}