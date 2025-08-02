using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Facturation.Models;

namespace Facturation.Data
{
    public class FacturationContext : DbContext
    {
        public FacturationContext (DbContextOptions<FacturationContext> options)
            : base(options)
        {
        }

        public DbSet<ClientModel> Client { get; set; } = default!;

        public DbSet<Facturation.Models.UserModel> User { get; set; }

        public DbSet<Facturation.Models.ProduitModel>? Produit { get; set; }

        public DbSet<Facturation.Models.FactureModel>? Facture { get; set; }
    }
}
