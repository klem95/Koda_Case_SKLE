using Application.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Application.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :base(options) {
        }

        public DbSet<User> Users { get; set; }
    }
}
