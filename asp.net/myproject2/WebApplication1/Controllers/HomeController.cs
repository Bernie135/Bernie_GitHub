using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Protocol;
using System.Diagnostics;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ProductContext _context;

        public HomeController(ILogger<HomeController> logger,ProductContext context)
        {
            _logger = logger;
            _context = context;
        }
        public IActionResult Index(HomeViewModel data)
        {
            ViewBag.name=data.Name;
            ViewBag.age=data.Age;
            var model = new HomeViewModel() { Name = data.Name, Age = data.Age };
            return View(model);
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
        public IActionResult Index1()
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