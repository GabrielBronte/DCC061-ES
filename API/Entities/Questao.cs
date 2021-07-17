using System.Collections.Generic;

namespace API.Entities
{
    public class Questao
    {
        public int Id { get; set; }
        public int QuizId { get; set;}
//        public Quiz Quiz { get; set; }
        public string Pergunta { get; set; }
        public List<Alternativas> Alternativas { get; set; }


    }
}