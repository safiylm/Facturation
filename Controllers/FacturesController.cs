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
        [Route("create")]
        public async Task<IActionResult> Index()
        {
            /*   return _context.Facture != null ? 
                          View(await _context.Facture.ToListAsync()) :
                          Problem("Entity set 'FacturationContext.FactureModel'  is null.");
      */


            FactureModel factureModel = new FactureModel() {Id=1,  ClientId = 1, UserId=  2 , Titre="Devis", 
                TotalTVA=23, TotalHT=4, Informations=",v,idkjf vc,xlsc<w", CreatedAt=DateTime.Now};
            _context.Add(factureModel);
            await _context.SaveChangesAsync();
            if (factureModel == null || _context.Facture == null)
            {
                return Ok("model is null ou context is null ");
            }
            return Ok(factureModel);
    
}
    

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

            return View(factureModel);

        }

        // GET: Factures/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Factures/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ClientId,UserId,Titre,TotalTVA,TotalHT,Informations,CreatedAt")] FactureModel factureModel)
        {
            if (ModelState.IsValid)
            {
                _context.Facture.Add(factureModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(factureModel);
        }

        // GET: Factures/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Facture == null)
            {
                return NotFound();
            }

            var factureModel = await _context.Facture.FindAsync(id);
            if (factureModel == null)
            {
                return NotFound();
            }
            return View(factureModel);
        }

        // POST: Factures/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ClientId,UserId,Titre,TotalTVA,TotalHT,Informations,CreatedAt")] FactureModel factureModel)
        {
            if (id != factureModel.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(factureModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FactureModelExists(factureModel.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(factureModel);
        }

        // GET: Factures/Delete/5
        public async Task<IActionResult> Delete(int? id)
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

            return View(factureModel);
        }

        // POST: Factures/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
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
