using System.Collections.Generic;
using System.Threading.Tasks;
using chills.back.Entities;
using chills.back.Persistance;
using Microsoft.EntityFrameworkCore;

namespace chills.back.Application.Services
{
    public class PostRepository : IPostRepository
    {
        private readonly ChillsDbContext _context;

        public PostRepository(ChillsDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Post>> GetPostsAsync()
        {
            return await _context.Posts.ToListAsync();
        }

        public async Task<Post> GetPostBySlugAsync(string slug)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(p => p.Slug == slug);
            return post == null ? null : post;
        }
    }
}