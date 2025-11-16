using System.ComponentModel.DataAnnotations.Schema;

namespace onemakeback.Models;

[Table("product")]
public class Product
{
    public int Product_Id { get; set; }
    public int Category_Id { get; set; }
    public required string Display_Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public required string Image_Path { get; set; }
    public int Storage {  get; set; }
    public DateTime Created_At { get; set; }
    public DateTime Updated_At { get; set; }
    public Category Category { get; set; } = null!;
}