
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Facturation.Data;
using Facturation.Models;

namespace Facturation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {

        private readonly FacturationContext _context;

        public UsersController(FacturationContext context)
        {
            _context = context;
        }

        // GET: Users
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var x = await _context.User.ToListAsync();
            if(x == null)
            {
                return NotFound();
            }

            return Ok(x);
            // : Problem("Entity set 'FacturationContext.UserModel'  is null.");
        }

        [HttpGet]
        [Route("byId")]
        public async Task<object> Details(int? id)
        {
            if (id == null || _context.User == null)
            {
                return NotFound();
            }

            var userModel = await _context.User
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userModel == null)
            {
                return NotFound();
            }

            return Ok(userModel);
        }


        [HttpPost]
        [Route("login")]
        public async Task<object> Login(string email)
        {
            if (email == null || _context.Client == null)
            {
                return Ok(new { erreur = "email is null || db client is null" });
            }
            //    var client = await _context.Client.FindAsync(id);
            //&& m.Password.Equals(password)
            var user = await _context.User
                .FirstOrDefaultAsync(m => m.Email.Equals("jean@example.com") );
            if (user == null)
            {
                return Ok(new { erreur = "user is null" });

            }

            return Ok(user);
        }


        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("create")]
        // [ValidateAntiForgeryToken]
        public async Task<object> Create([Bind("Nom, Prenom, Email, Adresse, Phone, Password, CreatedAt")] 
        UserModel userModel)
        {
            if (ModelState.IsValid)
            {
                _context.User.Add(userModel);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Created with success" });
            }
            return Ok(new { message = "User ModelStat is not valid." });
        }


        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("edit")]
        // [ValidateAntiForgeryToken]
        public async Task<object> Edit(int id, [Bind("Id,Nom,Prenom,Email,Password, Adresse,Phone,CreatedAt")] UserModel userModel)
        {
            if (userModel.Id!= null && ModelState.IsValid)
            {
                try
                {
                    _context.User.Update(userModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserModelExists(userModel.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(new { message = "Edited with success" });
            }
            return Ok(new { message = "User ModelStat is not valid." });
        }



        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")] //
                   //  [ValidateAntiForgeryToken]
        [Route("delete")]

        public async Task<object> DeleteConfirmed(int id)
        {
            if (_context.User == null)
            {
                return Ok(new { erreur = "Entity set 'FacturationContext.UserModel'  is null." });
            }
            var userModel = await _context.User.FirstOrDefaultAsync(m => m.Id == id);

            if (userModel != null)
            {
                _context.User.Remove(userModel);
                await _context.SaveChangesAsync();
                return Ok(new { message = "User Deleted with success!" });

            }
            if (userModel == null)
            
                return Ok(new { erreur = "Error, User is null!" });
                return Ok(new { erreur = "Error, User Deleted!" });

        }



        private bool UserModelExists(int id)
        {
          return (_context.User?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
