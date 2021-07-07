using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class PontuacaoDto
    {
        [Required] public int idAluno { get; set; }
        [Required] public int idQuiz { get; set; }
        [Required] public float tempoGasto { get; set; }
        [Required] public float porcentagemAcerto { get; set; }
        [Required] public float dificuldade { get; set;}
    }
}