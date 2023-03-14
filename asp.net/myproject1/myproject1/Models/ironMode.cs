using System.ComponentModel.DataAnnotations;
namespace myproject1.Models
{
    public class IronMode
    {
        [Display(Name = "號碼")]
        public int ID { get; set; }
        [Required(ErrorMessage = "名字不可為空")]
        public string? Name { get; set; }
        [Display(Name = "年齡")]
        public int Age { get; set; }
        [Display(Name = "地址")]
        public string? Address { get; set; }
    }
}
