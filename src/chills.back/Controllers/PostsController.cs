using System.Collections.Generic;
using System.Threading.Tasks;
using chills.back.Application.Services;
using chills.back.Entities;
using Microsoft.AspNetCore.Mvc;

namespace chills.back.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostsController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: api/post
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetPostss()
        {
            var posts = await _postRepository.GetPostsAsync();
            return Ok(posts);
        }
        
        // GET: api/trip/first-post
        [HttpGet("{slug}")]
        public async Task<ActionResult<Post>> GetPost(string slug)
        {
            var post = await _postRepository.GetPostBySlugAsync(slug);
            if (post==null)
            {
                return NotFound();
            }
            return  Ok(post);
        }
    }
}