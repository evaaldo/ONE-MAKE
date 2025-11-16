using onemakeback.Models;

namespace onemakeback.Services.Interfaces;

public interface IProductService
{
    public Task<IEnumerable<Product>> GetAllProducts();
    public Task<IEnumerable<Product>> GetProductsByCategory(string category);
}