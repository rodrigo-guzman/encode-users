using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.PortableExecutable;
using UsersCrud_Backend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UsersCrud_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UsuariosContext UsuariosContext = new UsuariosContext();
        //private readonly UsuariosContext _context;

        //public UserController(UsuariosContext context)
        //{
        //    _context = context;
        //}

        // GET: api/<UserController>
        [EnableCors("EnableCors")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                addHeaderCorse();
                var listUsers = await UsuariosContext.Usuarios.ToListAsync();
                return Ok(listUsers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            addHeaderCorse();
            return "value";
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try
            {
                UsuariosContext.Add(usuario);
                await UsuariosContext.SaveChangesAsync();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Usuario usuario)
        {
            try
            {
                if (id != usuario.Id)
                {
                    return NotFound();
                }
                UsuariosContext.Update(usuario);
                await UsuariosContext.SaveChangesAsync();
                return Ok(new { message = "El usuario fue actualizado con éxito."});
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            //addHeaderCorse();
            try
            {
                var usuario = await UsuariosContext.Usuarios.FindAsync(id);
                if (usuario == null)
                {
                    return NotFound();
                }
                UsuariosContext.Usuarios.Remove(usuario);
                await UsuariosContext.SaveChangesAsync();
                return Ok(new { message = "El usuario fue eliminado con éxito." });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        private void addHeaderCorse()
        {
            HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
            HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        }
    }
}
