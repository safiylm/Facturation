using Facturation.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Configuration de la DB
builder.Services.AddDbContext<FacturationContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("FacturationContext")
        ?? throw new InvalidOperationException("Connection string 'FacturationContext' not found.")
    ));

// ✅ Ajouter CORS AVANT builder.Build()
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy
            .WithOrigins("http://localhost:44496")  // ⚠️ Remplace par le vrai port Angular
            .AllowAnyHeader()
            .AllowAnyMethod());
});

// Ajouter les contrôleurs
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Middleware
if (!app.Environment.IsDevelopment())
{
    // éventuellement UseExceptionHandler ici
}

app.UseCors("AllowAngular"); // IMPORTANT : avant Authorization

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Routes
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
