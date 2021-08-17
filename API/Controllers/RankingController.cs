using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RakingFCast : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "1", "2", "3"
        };

        private readonly ILogger<RankingController> _logger;

        // The Web API will only accept tokens 1) for users, and 2) having the access_as_user scope for this API
        static readonly string[] scopeRequiredByApi = new string[] { "access_as_user" };

        public RankingController(ILogger<RankingController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Rankings> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Ranking
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
