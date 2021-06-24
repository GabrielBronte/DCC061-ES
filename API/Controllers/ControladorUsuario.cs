using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dados;
using API.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ControladorUsuario : ControllerBase
    {
        private readonly DataContext _context;
        public ControladorUsuario(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }


    }
}