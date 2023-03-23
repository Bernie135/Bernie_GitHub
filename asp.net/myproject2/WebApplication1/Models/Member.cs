using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class Member
{
    public int Id { get; set; }
    [Display(Name = "姓名")]
    public string Name { get; set; } = null!;
    [Display(Name = "帳號")]
    public string Account { get; set; } = null!;
    [Display(Name = "密碼")]
    public string Password { get; set; } = null!;
    
    public string Email { get; set; } = null!;
}
