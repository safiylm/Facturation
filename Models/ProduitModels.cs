using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Facturation.Models
{
    public class ProduitModel
    {

        //   public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // << important
        public int Id { get; set; }

        public double Quantite { get; set; }
       
       public string Designation { get; set; }
        
        public double PrixUnitaireHT { get; set; }
        
        public int FactureId { get; set; }
        
        public double TVA { get; set; }
        public DateTime? CreatedAt { get; set; }


    }
}