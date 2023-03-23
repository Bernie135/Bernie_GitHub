using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Protocol;
using System.Diagnostics;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ProductContext _context;
        private readonly UserContext _context1;

        public HomeController(ILogger<HomeController> logger,ProductContext context, UserContext context1)
        {
            _logger = logger;
            _context = context;
            _context1 = context1;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(HomeViewModel member)
        {
            var data = _context1.Members.Where(d => d.Password == member.Password).Where(d => d.Account == member.Account).ToList();
            if (data !=null)
            {
                return RedirectToAction("Index","Product");
            }
            return View();
        }
        [HttpPost]
        public JsonResult Postname(string name)
        { 
            ViewBag.name = name;
            return new JsonResult(name);
        }
        public IActionResult Privacy()
        {
            //--AdoNet 用法
            // AdoNetDBModel db = new AdoNetDBModel();
            //var datalist = db.Get();
            var data = _context.Prodects.ToList();
            return View(data);
        }
        public IActionResult AddMember()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}