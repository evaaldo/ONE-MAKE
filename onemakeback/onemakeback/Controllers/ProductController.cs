using Microsoft.AspNetCore.Mvc;
using onemakeback.Models;
using onemakeback.Services.Interfaces;

namespace onemakeback.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllProducts()
    {
        try
        {
            var products = await _productService.GetAllProducts();
            
            if (!products.Any()) 
                return NoContent();
            
            return Ok(products);
        }
        catch (Exception ex)
        {
            return BadRequest($"Error on fetching products: {ex}");
        }
    }

    [HttpGet("{category}")]
    public async Task<IActionResult> GetProductByCategory(string category)
    {
        try
        {
            var products = await _productService.GetProductsByCategory(category);
            
            if (!products.Any())
                return NoContent();
            
            return Ok(products);
        }
        catch (Exception ex)
        {
            return BadRequest($"Error on fetching products: {ex}");
        }
    }
}