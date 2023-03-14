using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models;

public partial class ProductContext : DbContext
{
    public ProductContext()
    {
    }

    public ProductContext(DbContextOptions<ProductContext> options)
        : base(options)
    {
    }

    public virtual DbSet<File> Files { get; set; }

    public virtual DbSet<Prodect> Prodects { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
    {
        //從appsetting.json 拿連線字串給 Program.cs 加入 builder.Services.AddDbContext<ProductContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DBConStr")));
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //=> optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=product;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<File>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__File__3214EC0732252EE0");

            entity.ToTable("File");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<Prodect>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Prodect__3214EC0701FE01A8");

            entity.ToTable("Prodect");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.FileId)
                .HasMaxLength(36)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

            entity.HasOne(d => d.File).WithMany(p => p.Prodects)
                .HasForeignKey(d => d.FileId)
                .HasConstraintName("FK__Prodect__FileId__36B12243");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
