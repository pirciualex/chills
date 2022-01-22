using System;
using chills.back.Entities;
using Microsoft.EntityFrameworkCore;

namespace chills.back.Persistance
{
    public class ChillsDbContext : DbContext
    {
        public ChillsDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>(b =>
            {
                b.Property(p => p.Id)
                    .UseIdentityColumn(1000, 1)
                    .HasColumnName("PostID");
                b.HasIndex(p => p.Slug).IsUnique();
                b.Property(p => p.Slug).IsRequired();
                b.Property(p => p.Title).IsRequired();
                b.Property(p => p.Description).IsRequired().HasMaxLength(500);
                b.Property(p => p.Content).IsRequired();
                b.Property(p => p.CreatedAt).HasDefaultValue(DateTime.Now);
                b.Property(p => p.UpdatedAt).HasDefaultValue(DateTime.Now);
            });
        }
    }
}