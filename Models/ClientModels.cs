using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Facturation.Models
{
    public class ClientModel
    {

        //   public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // << important
        public int Id { get; set; }

        public string Nom { get; set; }
       
       public string Prenom { get; set; }
        
        public string Email { get; set; }
        
        public string Adresse { get; set; }
        
        public string? Phone { get; set; }
        public DateTime? CreatedAt { get; set; }
    

    }
}