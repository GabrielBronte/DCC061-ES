using System.Collections.Generic;

namespace API.DTOs
{
    public class PorcentagemAcerto
    {
        public int idQuiz { get; set; }
        public List<int> idQuestao { get; set; }    
        public List<int> idAlternativa { get; set; }

    }
}