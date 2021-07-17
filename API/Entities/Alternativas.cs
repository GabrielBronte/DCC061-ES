using System.Collections.Generic;

namespace API.Entities
{
    public class Alternativas
    {
        public int Id { get; set; }
        public int QuestaoId { get; set; }
        public Questao Questao { get; set; }
        public string Descricao { get; set; }
        public string Comentario { get; set; }
        public bool ECorreto { get; set; }

    }
}