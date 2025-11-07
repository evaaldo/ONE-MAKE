namespace onemakeback.Models;

public class Product
{
    public int Id { get; set; }
    public int CategoryId { get; set; }
    public required string DisplayName { get; set; }
    public string? Description { get; set; }
    public string? Price { get; set; }
    public required string ImagePath { get; set; }
    public int Storage {  get; set; }
    public DateTime Created_At { get; set; }
    public DateTime Updated_At { get; set; }
}