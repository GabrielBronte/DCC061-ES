using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class QuizController : BaseApiController
    {
        private readonly DataContext _context;

        public readonly IMapper _mapper ;

        public QuizController(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        [HttpPost("quizRegister")]
        public async Task<ActionResult<Quiz>> RegisterQuiz(RegisterQuizDto quizDto)
        {
            var quiz = new Quiz
            {
                Topico = quizDto.Topico,
                //Questao = _mapper.Map<List<Questao>>(quizDto.Questao)
                Questao = quizDto.Questao
            };

            _context.Quiz.Add(quiz);

            await _context.SaveChangesAsync();

            return quiz;
        }

        [HttpGet("GetQuizById")]
        public async Task<ActionResult<Quiz>> GetQuizById(int idQuiz)
        {
            if(!await QuizExists(idQuiz)) return BadRequest("idQuiz invalido");
            else
            {
                return _context.Quiz.Include(q => q.Questao).ThenInclude(a => a.Alternativas)
                    .FirstOrDefault(x => x.Id == idQuiz);
            }

            return BadRequest("Erro ao encontrar quiz");

        }

        [HttpGet("GetIdQuizbyTopico")]
        public async Task<ActionResult<List<Quiz>>> GetIdQuizbyTopico(string topico)
        {

            return await _context.Quiz.Where(x => x.Topico == topico).ToListAsync();

        }
        
        [HttpGet("GetAllQuizzes")]
        public async Task<List<Quiz>> GetAllQuizzes()
        {
            return await _context.Quiz.ToListAsync();
        }
        
        [HttpGet("GetAllTopics")]
        public async Task<List<Quiz>> GetAllTopics()
        {
            return  await _context.Quiz.Where(x => x.Topico != null).ToListAsync();
        }

        private async Task<bool> QuizExists(int id)
        {
            return await _context.Quiz.AnyAsync(x => x.Id == id );
        }

    }

}