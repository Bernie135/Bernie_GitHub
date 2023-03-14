using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace WebApplication1.Models
{
    [ModelMetadataType(typeof(ProdectMetadataType))]
    public partial class Prodect
    {

    }
    public class ProdectMetadataType
    {
        [Display(Name = "商品名稱")]
        [Required]
        public string Name { get; set; } = null!;
        [Display(Name = "價格")]
        [Required]
        public decimal Price { get; set; }
    }
}
