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
    public class ProduitsController : Controller
    {
        private readonly FacturationContext _context;

        public ProduitsController(FacturationContext context)
        {
            _context = context;
        }

        // GET: Produits

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var x = await _context.Produit.ToListAsync();
            return Ok(x);
        }

        // GET: Produits/byId/5
        [Route("byId")]

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Produit == null)
            {
                return NotFound();
            }

            var produitModel = await _context.Produit
                .FirstOrDefaultAsync(m => m.Id == id);
            if (produitModel == null)
            {
                return NotFound();
            }

            return Ok(produitModel);
        }

        // GET: Produits/byId/5
        [Route("byFactureId")]

        public async Task<IActionResult> GetByFactureId(int? id)
        {
            if (id == null || _context.Produit == null)
            {
                return NotFound();
            }

            var produitModel = await _context.Produit
                .Where(m => m.FactureId == id).ToListAsync();
            if (produitModel == null)
            {
                return NotFound();
            }

            return Ok(produitModel);
        }



        // POST: Produits/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //  [ValidateAntiForgeryToken]
        [Route("create")]

        public async Task<IActionResult> Create([Bind("Quantite,Designation,PrixUnitaireHT,FactureId,TVA,CreatedAt")] ProduitModel[] produitModel)
        {
            if (ModelState.IsValid)
            {
                foreach(var produit in produitModel)
                {
                    _context.Add(produit);

                }
                await _context.SaveChangesAsync();
                return Ok(new { message = "Created with success" });

            }
            return Ok(produitModel);
        }

 

        // POST: Produits/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [Route("edit")]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit( [Bind("Id,Quantite,Designation,PrixUnitaireHT,FactureId,TVA,CreatedAt")] ProduitModel produitModel)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Produit.Update(produitModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProduitModelExists(produitModel.Id))
                    {
                        return Ok(new { message = "id not exists" });
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(new { message = "edit produit reussii" });
            }
            return Ok(produitModel);
        }

        // GET: Produits/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Produit == null)
            {
                return NotFound();
            }

            var produitModel = await _context.Produit
                .FirstOrDefaultAsync(m => m.Id == id);
            if (produitModel == null)
            {
                return NotFound();
            }

            return View(produitModel);
        }

        // POST: Produits/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Produit == null)
            {
                return Problem("Entity set 'FacturationContext.ProduitModel'  is null.");
            }
            var produitModel = await _context.Produit.FindAsync(id);
            if (produitModel != null)
            {
                _context.Produit.Remove(produitModel);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProduitModelExists(int id)
        {
          return (_context.Produit?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
