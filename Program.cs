using Facturation.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// ✅ Ajouter CORS AVANT builder.Build()

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        policy => policy 
    .WithOrigins("http://localhost:44496")  // ⚠️ Remplace par le vrai port Angular
            .AllowAnyHeader()
            .AllowAnyMethod()
    .AllowCredentials());

});


// Configuration de la DB
builder.Services.AddDbContext<FacturationContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("FacturationContext")
        ?? throw new InvalidOperationException("Connection string 'FacturationContext' not found.")
    ));



// Ajouter les contrôleurs
builder.Services.AddControllers();

var app = builder.Build();


app.UseCors("AllowLocalhost"); // IMPORTANT : avant Authorization
app.MapControllers();
app.UseHttpsRedirection();
//app.UseStaticFiles();
app.UseRouting();
//app.UseAuthorization();

// Routes
app.MapControllerRoute(
   name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

//app.MapFallbackToFile("index.html");

app.Run();
