using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class MedalhasController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public MedalhasController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost("{username}")]
        public async Task<ActionResult> AddMedalha(string username)
        {
            var sourceUserId = User.GetUserId();
            var MedalhadUser = await _unitOfWork.UserRepository.GetUserByUsernameAsync(username);
            var sourceUser = await _unitOfWork.MedalhasRepository.GetUserWithMedalhas(sourceUserId);

            if (MedalhadUser == null) return NotFound();

            if (sourceUser.UserName == username) return BadRequest("You cannot Medalha yourself");

            var userMedalha = await _unitOfWork.MedalhasRepository.GetUserMedalha(sourceUserId, MedalhadUser.Id);

            if (userMedalha != null) return BadRequest("You already Medalha this user");

            userMedalha = new UserMedalha
            {
                SourceUserId = sourceUserId,
                MedalhadUserId = MedalhadUser.Id
            };

            sourceUser.MedalhadUsers.Add(userMedalha);

            if (await _unitOfWork.Complete()) return Ok();

            return BadRequest("Failed to Medalha user");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedalhaDto>>> GetUserMedalhas([FromQuery] MedalhasParams MedalhasParams)
        {
            MedalhasParams.UserId = User.GetUserId();
            var users = await _unitOfWork.MedalhasRepository.GetUserMedalhas(MedalhasParams);

            Response.AddPaginationHeader(users.CurrentPage,
                users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(users);
        }
    }
}