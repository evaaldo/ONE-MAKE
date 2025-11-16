using System.ComponentModel.DataAnnotations.Schema;

namespace onemakeback.Models;

public class Category
{
    public int Category_Id { get; set; }
    public required string Slug { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public DateTime Created_At { get; set; }
    public DateTime Updated_At { get; set; }
    public ICollection<Product> Products { get; set; } = new List<Product>();
}