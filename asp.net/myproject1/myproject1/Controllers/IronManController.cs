using Microsoft.AspNetCore.Mvc;
using myproject1.Models;
using static System.Formats.Asn1.AsnWriter;

namespace myproject1.Controllers
{
    public class IronManController : Controller
    {
        public IActionResult Index()
        {
            IronMode Obj = new()
            {
                ID = 1,
                Name = "史考特",
                Age = 30,
                Address = "Hsinchu"
            };
            return View(Obj);
        }
    }
}
