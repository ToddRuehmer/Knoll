using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Driver;

namespace Knoll
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(); // Add support for MVC framework

            // MongoDB connection code
            string connectionString = Configuration.GetConnectionString("MongoDB");
            MongoClient mongoClient = new MongoClient(connectionString);
            IMongoDatabase mongoDatabase = mongoClient.GetDatabase("todos");

            // Register MongoDB services
            services.AddSingleton<IMongoClient>(mongoClient);
            services.AddSingleton<IMongoDatabase>(mongoDatabase);

            Console.WriteLine("Closing connection to MongoDB");

            // You can add additional services here if needed
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseStaticFiles(); // Enable serving static files (e.g., CSS, JS)

            app.UseRouting(); // Enable routing

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");

                // Add the following line to map the "/todoitems/get" URL to the Get action
                endpoints.MapControllerRoute(
                    name: "todoitems",
                    pattern: "todoitems/{action}",
                    defaults: new { controller = "TodoItems" });
            });
        }
    }
}
