namespace API.Entities
{
    public class Pontuacao
    {
        public int Id { get; set; }
        public float tempoQuiz { get; set; }
        public int idQuiz { get; set; }
        public int idAluno { get; set; }
        public float pontuacao { get; set; }
    }
}