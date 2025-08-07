using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Facturation.Data;
using Facturation.Models;

namespace Facturation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FacturesController : Controller
    {
        private readonly FacturationContext _context;

        public FacturesController(FacturationContext context)
        {
            _context = context;
        }

        // GET: Factures
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var x = await _context.Facture.ToListAsync();
            return Ok(x);
        }

        [HttpGet]
        [Route("byId")]
        // GET: Factures/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Facture == null)
            {
                return NotFound();
            }

            var factureModel = await _context.Facture
                .FirstOrDefaultAsync(m => m.Id == id);
            if (factureModel == null)
            {
                return NotFound();
            }

            return Ok(factureModel);

        }

        // POST: Factures/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //   [ValidateAntiForgeryToken]
        [Route("create")]
        public async Task<IActionResult> Create([Bind("ClientId,UserId,Titre,TotalTVA,TotalHT,Informations,CreatedAt")] FactureModel factureModel)
        {

            if (ModelState.IsValid)
            {
                _context.Facture.Add(factureModel);
                await _context.SaveChangesAsync();
                return Ok(new
                {
                    message = "Facture created successfully",
                    id = factureModel.Id // << retourne l'ID ici
                });
            }
            return Ok(new { message = "Facture ModelStat is not valid." });
        }

   
 

        // POST: Factures/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("edit")]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit( [Bind("Id,ClientId,UserId,Titre,TotalTVA,TotalHT,Informations,CreatedAt")] FactureModel factureModel)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Facture.Update(factureModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FactureModelExists(factureModel.Id))
                    {
                        return Ok(new { message ="id facture not founded" });
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(new { message = "Facture edit Reussi" });
            }
            return Ok(factureModel);
        }


 

        // POST: Factures/Delete/5
        [HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Facture == null)
            {
                return Problem("Entity set 'FacturationContext.FactureModel'  is null.");
            }
            var factureModel = await _context.Facture.FindAsync(id);
            if (factureModel != null) 
            {
                _context.Facture.Remove(factureModel);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FactureModelExists(int id)
        {
          return (_context.Facture?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
