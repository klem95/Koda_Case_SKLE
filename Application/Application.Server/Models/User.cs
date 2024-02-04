using System.ComponentModel.DataAnnotations;

namespace Application.Server.Models
{
    public class User
    {
        [Key]
        public required string email { get; set; } 
        public required string name { get; set; }
        public string? artistName { get; set; }
        
    }
}
