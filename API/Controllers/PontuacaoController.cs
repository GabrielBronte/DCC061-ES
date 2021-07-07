using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class PontuacaoController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly UserManager<AppUser> _userManager;

        public PontuacaoController(DataContext context, UserManager<AppUser> userManager = null)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<ActionResult<Pontuacao>> RegisterPontuacao(PontuacaoDto pontDto)
        {
            if(!await UserExists(pontDto.idAluno)) return BadRequest("IdAluno invalido");

            if(!await QuizExists(pontDto.idQuiz)) return BadRequest("idQuiz invalido");

            var pontuacaoUsuario = new Pontuacao
            {
                idAluno = pontDto.idAluno,
                idQuiz = pontDto.idQuiz,
                tempoQuiz = pontDto.tempoGasto,
                pontuacao = pontDto.dificuldade * pontDto.porcentagemAcerto * pontDto.tempoGasto 
            };

            _context.Pontuacao.Add(pontuacaoUsuario);

            await _context.SaveChangesAsync();

            return pontuacaoUsuario;
        }

        /*
        private async Task<ActionResult<float>> calculaPorcentagem(PorcentagemAcerto porcAcerto)
        {
            if(!await QuizExists(porcAcerto.idQuiz)) return BadRequest("idQuiz invalido");

            float porcentagem = 0;

            for ( int i=0; i < porcAcerto.idQuestao.Count ; i++)
            {
                
            }

            return porcentagem;
        }
*/
        private async Task<bool> UserExists(int id)
        {
            return await _context.Users.AnyAsync(x => x.Id == id);
        }

        private async Task<bool> QuizExists(int id)
        {
            return await _context.Quiz.AnyAsync(x => x.Id == id );
        }

        /*private async Task<bool> QuestaoExists(int idQuestao, int idAlternativa)
        {
           
        }*/


    }
}