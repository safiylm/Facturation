using Microsoft.AspNetCore.Mvc;
using Facturation.Models;
using Facturation.Data;
using Microsoft.EntityFrameworkCore;
using Facturation.Migrations;

namespace Facturation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly FacturationContext _context;

        public ClientsController(FacturationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var x = await _context.Client.ToListAsync();
            return Ok(x);
        }


        [HttpGet]
        [Route("byId")]
        public async Task<IActionResult> GetOneAsync(int id)
        {
            if (id == null || _context.Client == null)
            {
                return NotFound();
            }
        //    var client = await _context.Client.FindAsync(id);

            var client = await _context.Client
                .FirstOrDefaultAsync(m => m.Id.Equals( id));
            if (client == null)
            {
                return NotFound();
            }

           return Ok(client);
        }

 


        // POST: Clients/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //   [ValidateAntiForgeryToken]
        [Route("create")]

        public async Task<object> CreateAsync([Bind("Nom,Prenom,Email,Adresse,Phone,CreatedAt")]
          ClientModel client)
        {
            if (ModelState.IsValid)
            {
                _context.Client.Add(client);
               await _context.SaveChangesAsync();
                return Ok(new { message = "Created with success" });
            }
            return Ok(new { message = "ModelStat is not valid." });
        }

        [HttpPost]
        [Route("edit")]
        // [ValidateAntiForgeryToken]
        public async Task<object> Edit([Bind("Id,Nom,Prenom,Email,Adresse,Phone,CreatedAt")] ClientModel  client)
        {          

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Client.Update(client);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ClientExists(client.Id))
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
            return Ok(new { message = "ModelStat is not valid." });
        }


        // POST: Clients/Delete/5
        [HttpPost, ActionName("Delete")]
        [Route("delete")]
      //  [ValidateAntiForgeryToken]
        public async Task<object> DeleteConfirmed(int id)
        {
            if (_context.Client == null)
            {
                return Problem("Entity set 'FacturationContext.Client'  is null.");
            }
            var client = await _context.Client.FindAsync(id);
            if (client != null)
            {
                _context.Client.Remove(client);
            }

            await _context.SaveChangesAsync();
            return Ok(new { message = "Client is deleted with success." });
        }

        private bool ClientExists(int id)
        {
            return (_context.Client?.Any(e => e.Id == id)).GetValueOrDefault();
        }

    }
    /*
        public class ClientsController : Controller
        {
          

            // GET: Clients
            public async Task<IActionResult> Index()
            {
                return _context.Client != null ?
                            View(await _context.Client.ToListAsync()) :
                            Problem("Entity set 'FacturationContext.Client'  is null.");
            }

            // GET: Clients/Details/5
            public async Task<IActionResult> Details(string id)
            {
                if (id == null || _context.Client == null)
                {
                    return NotFound();
                }

                var client = await _context.Client
                    .FirstOrDefaultAsync(m => m._id == id);
                if (client == null)
                {
                    return NotFound();
                }

                return View(client);
            }

        
           
    

            // POST: Clients/Edit/5
            // To protect from overposting attacks, enable the specific properties you want to bind to.
            // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
       

            // GET: Clients/Delete/5
            public async Task<IActionResult> Delete(string id)
            {
                if (id == null || _context.Client == null)
                {
                    return NotFound();
                }

                var client = await _context.Client
                    .FirstOrDefaultAsync(m => m._id == id);
                if (client == null)
                {
                    return NotFound();
                }

                return View(client);
            }

     

        
        }*/
}
