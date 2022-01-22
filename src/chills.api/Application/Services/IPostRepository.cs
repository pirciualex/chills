using System.Collections.Generic;
using System.Threading.Tasks;
using chills.back.Entities;

namespace chills.back.Application.Services
{
    public interface IPostRepository
    {
        public Task<IEnumerable<Post>> GetPostsAsync();
        public Task<Post> GetPostBySlugAsync(string slug);
    }
}