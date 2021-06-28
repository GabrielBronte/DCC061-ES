using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class QuizRepository : IQuizRepository
    {
        private readonly DataContext __context;
        private readonly IMapper _mapper;
        public QuizRepository(DataContext context, IMapper mapper)
        {
            __context = context;
            _mapper = mapper;
        }

        public async Task<List<QuizDto>> GetQuizAsync() 
        {
            return await __context.Quiz.
                ProjectTo<QuizDto>(_mapper.ConfigurationProvider).
                ToListAsync();
        }
        
    }
}