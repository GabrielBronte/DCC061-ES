using System.Collections.Generic;
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
        //private readonly IQuizRepository _quizRepository;
        private readonly DataContext _context;

        public QuizController(DataContext context)
        {
            _context = context;
            //_quizRepository = quizRepository;
        }

        [HttpPost("quizRegister")]
        public async Task<ActionResult<Quiz>> RegisterQuiz(RegisterQuizDto quizDto)
        {
            var quiz = new Quiz
            {
                Topico = quizDto.topico,
                Questao = quizDto.questao
            };

            _context.Quiz.Add(quiz);

            await _context.SaveChangesAsync();

            return quiz;
        }
    }

}