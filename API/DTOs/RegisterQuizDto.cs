using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class RegisterQuizDto
    {
        [Required]
        public string topico { get; set; }

        [Required]
        public List<Questao> questao { get; set; }


    }
}