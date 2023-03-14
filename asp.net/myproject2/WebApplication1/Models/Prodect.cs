using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Prodect
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public decimal Price { get; set; }

    public string? FileId { get; set; }

    public virtual File? File { get; set; }
}
