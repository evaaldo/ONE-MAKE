using System.Data;
using Dapper;
using onemakeback.Models;
using onemakeback.Services.Interfaces;

namespace onemakeback.Services;

public class ProductService : IProductService
{
    private readonly IDbConnection _db;

    public ProductService( IDbConnection db)
    {
        _db = db;
    }

    public async Task<IEnumerable<Product>> GetAllProducts()
    {
        var sql = "SELECT * FROM PRODUCT";
        var products = await _db.QueryAsync<Product>(sql);
        return products;
    }

    public async Task<IEnumerable<Product>> GetProductsByCategory(string category)
    {
        var sql = "SELECT * FROM PRODUCT P INNER JOIN CATEGORY C ON C.CATEGORY_ID = P.CATEGORY_ID WHERE C.SLUG = @Category";
        var products = await _db.QueryAsync<Product>(sql, new { @Category = category });
        return products;
    }
}