using System.Collections.Generic;
using API.Entities;

namespace API.DTOs
{
    public class QuizDto
    {
        public string Topico { get; set; }
        public List<Questao> questao { get; set; }
    }
}