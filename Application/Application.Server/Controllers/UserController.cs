using Application.Server.Data;
using Application.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Application.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController:ControllerBase
    {
        private readonly ApplicationDbContext context;

        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpPost(Name = "user")]
        public async Task<ActionResult<User>> CreateUser(User _user)
        {
            try
            {
                var mail = new System.Net.Mail.MailAddress(_user.email);
                if (mail.Address == _user.email) {
                    context.Users.Add(_user);
                await context.SaveChangesAsync();
                return Ok(_user);
                } else
                {
                    throw new Exception();
                }
            } catch (Exception)
            {
                return BadRequest("Unable to create user.");
            }
            
        }

        [HttpGet(Name = "users")]
        public async Task<ActionResult <IEnumerable<User>>> GetUsers()
        {
            try
            {
                return await context.Users.ToListAsync();
            } catch (Exception)
            {
                return BadRequest("Unable to retrieve users.");
            }
        }

        [HttpPut(Name = "user")]
        public async Task<ActionResult<User>> UpdateUser(string _email, string _newName)
        {
            try
            {
                var user = context.Users.First(x => x.email == _email);
                if(user == null)
                {
                    return BadRequest(String.Format("{0} does not have an associated user.", _email));
                }

                user.name = _newName;
                await context.SaveChangesAsync();
                return user;
            } catch (Exception)
            {
                return BadRequest("Unable to update user.");
            }
        }

        [HttpDelete(Name = "user")]
        public async Task<ActionResult<bool>> DeleteUser(string _email)
        {
            try
            {
                var user = context.Users.First(x => x.email == _email);
                if (user == null)
                {
                    return BadRequest(String.Format("{0} does not have an associated user.", _email));
                }
                var test = context.Remove(user);
                await context.SaveChangesAsync();   
                return true;
            } catch (Exception)
            {
                return BadRequest("Unable to delete user.");
            }

        }






    }
}
