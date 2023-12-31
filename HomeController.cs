using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Knoll
{
    public class HomeController : Controller
    {
        private readonly IMongoDatabase _mongoDatabase;

        public HomeController(IMongoDatabase mongoDatabase)
        {
            _mongoDatabase = mongoDatabase;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
