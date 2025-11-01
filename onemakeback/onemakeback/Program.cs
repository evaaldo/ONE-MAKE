using System.Data;
using Npgsql;
using onemakeback.Services;
using onemakeback.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddOpenApi();

builder.Services.AddScoped<IDbConnection>(sp => new NpgsqlConnection(builder.Configuration.GetConnectionString("ONE_MAKE")));

builder.Services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();