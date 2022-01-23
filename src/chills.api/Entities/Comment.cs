using System;

namespace chills.back.Entities
{
    public class Comment
    {
        public Guid Id { get; set; }
        public int ParentId { get; set; }
        public Post ParentPost { get; set; }
    }
}