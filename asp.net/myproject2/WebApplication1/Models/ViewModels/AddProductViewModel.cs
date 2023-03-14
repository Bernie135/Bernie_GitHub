using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.ViewModels
{
    public class AddProductViewModel
    {
        public int Id { get; set; }
        [Display(Name = "商品名稱")]
        [Required]
        public string? Name { get; set; }
        [Display(Name = "價格")]
        [Required]
        public decimal Price { get; set; }
        public IFormFile? File { get; set; }
    }
}
