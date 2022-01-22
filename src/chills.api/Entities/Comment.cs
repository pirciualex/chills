namespace chills.back.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public Post ParentPost { get; set; }
    }
}