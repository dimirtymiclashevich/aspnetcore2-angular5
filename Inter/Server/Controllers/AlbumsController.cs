using System.Collections.Generic;
using System.Linq;
using Inter.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Inter.Server.Controllers
{
    [Route("api/albums")]
    public class AlbumsController : Controller
    {
        private readonly ApplicationContext _db;

        public AlbumsController(ApplicationContext context)
        {
            _db = context;
        }

        [HttpGet]
        public IEnumerable<Album> Get()
        {
            return _db.Albums.ToList();
        }

        [HttpGet("{id}")]
        public Album Get(int id)
        {
            Album album = _db.Albums.FirstOrDefault(a => a.Id == id);
            return album;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Album album)
        {
            if (ModelState.IsValid)
            {
                _db.Albums.Add(album);
                _db.SaveChanges();
                return Ok(album);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Album album)
        {
            if (ModelState.IsValid)
            {
                _db.Update(album);
                _db.SaveChanges();
                return Ok(album);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Album album = _db.Albums.FirstOrDefault(a => a.Id == id);
            if (album != null)
            {
                _db.Albums.Remove(album);
                _db.SaveChanges();
            }
            return Ok(album);
        }
    }
}
