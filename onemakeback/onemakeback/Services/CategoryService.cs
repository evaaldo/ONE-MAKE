using System.Data;
using Dapper;
using onemakeback.Models;
using onemakeback.Services.Interfaces;

namespace onemakeback.Services;

public class CategoryService : ICategoryService
{
    private readonly IDbConnection _db;
    public CategoryService(IDbConnection db)
    {
        _db = db;
    }
    
    public async Task<IEnumerable<Category>> GetAllCategories()
    {
        var sql = "SELECT * FROM CATEGORY";
        var categories = await _db.QueryAsync<Category>(sql);
        return categories;
    }
}