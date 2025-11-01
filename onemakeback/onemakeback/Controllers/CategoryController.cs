using Microsoft.AspNetCore.Mvc;
using onemakeback.Services.Interfaces;

namespace onemakeback.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var categories = await _categoryService.GetAllCategories();
            
            if (!categories.Any())
                return NoContent();
            
            return Ok(categories);
        }
        catch (Exception e)
        {
            return BadRequest($"Error on getting categories: {e.Message}");
        }
    }
}