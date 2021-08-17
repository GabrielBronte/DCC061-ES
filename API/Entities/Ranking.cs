using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    
    public class Ranking
    {
        public int Id { get; set; }
        public string Colocacao { get; set; }
        public bool IsMain { get; set; }
        public string Nome { get; set; }
        public List< AppUser > Medalhistas{ get; set; }
        public int AppUserId { get; set; }
		public int ColocacaoSegundo { get; set; }
		
		
    }
}