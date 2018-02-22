using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Inter.Server.Models
{
    public class ApplicationContext : DbContext
    {
        private DbSet<Album> _albums;

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<Album> Albums
        {
            get
            {
                if (!_albums.Any()) // never empty
                {
                    _albums.Add(new Album { Artist= "Steely Dan", Name = "Can't Buy a Thrill", Year = 1972 });
                    _albums.Add(new Album { Artist = "Neil Young", Name = "Comes a Time", Year = 1978 });
                    _albums.Add(new Album { Artist = "Leonard Cohen", Name = "You Want It Darker", Year = 2016 });

                    this.SaveChanges();
                }

                return _albums;
            }
            set => _albums = value;
        }
    }
}
