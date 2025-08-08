using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Facturation.Models
{
    public class FactureModel
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // << important
        public int Id { get; set; }

        public int ClientId { get; set; }

        public int UserId { get; set; }

        public string Titre { get; set; }

        public double TotalTVA { get; set; }
        public double TotalHT { get; set; }
        public string Status { get; set; }

        public string Remarques { get; set; }
        public DateTime? CreatedAt { get; set; }



    }
}