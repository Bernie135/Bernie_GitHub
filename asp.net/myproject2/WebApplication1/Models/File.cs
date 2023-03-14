using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class File
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public virtual ICollection<Prodect> Prodects { get; } = new List<Prodect>();
}
