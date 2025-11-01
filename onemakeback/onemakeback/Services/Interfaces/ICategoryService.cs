using onemakeback.Models;

namespace onemakeback.Services.Interfaces;

public interface ICategoryService
{
    public Task<IEnumerable<Category>> GetAllCategories();
}