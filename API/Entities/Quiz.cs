using System.Collections.Generic;

namespace API.Entities
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Topico { get; set; }
        public List<Questao> Questao { get; set; }
        
    }
}