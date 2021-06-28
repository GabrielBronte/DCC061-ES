using System.Collections.Generic;

namespace API.Entities
{
    public class Questao
    {
        public int id { get; set; }
        public string Pergunta { get; set; }
        public List<Alternativas> Alternativas { get; set; }
    }
}