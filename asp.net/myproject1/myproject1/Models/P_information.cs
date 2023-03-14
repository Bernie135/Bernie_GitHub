using System.ComponentModel.DataAnnotations;
namespace myproject1.Models
{
    public class P_information
    {
        [Display(Name = "編號")]
        public int ID { get; set; }
        [Required(ErrorMessage = "名字不可為空")]
        public string? Name { get; set; }
        [Display(Name = "性別")]
        public string? Sex { get; set; }
        [Display(Name = "身分證號碼")]
        public string? Cardid { get; set; }
        [Display(Name = "帳號")]
        public string? Account { get; set; }
        [Display(Name = "密碼")]
        public string? Password {get; set; }
    }
}
