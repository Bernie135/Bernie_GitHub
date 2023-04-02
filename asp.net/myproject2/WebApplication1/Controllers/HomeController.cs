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
        public IActionResult Login(HomeViewModel member)
        {
            var data = _context1.Members.Where(d => d.Password == member.Password).Where(d => d.Account == member.Account).ToList();
            if (data .Count !=0)
            {
                return RedirectToAction("Index","Product", new { name = member.Account });
            }
            return RedirectToAction("Index");
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
        [HttpPost]
        public IActionResult TOAddMember(Member member) 
        {
            if (ModelState.IsValid) 
            {
                var last = _context1.Members.OrderByDescending(d => d.Id).FirstOrDefault();
                var product = new Member()
                {
                    Id = last.Id + 1,
                    Name = member.Name,
                    Account = member.Account,
                    Password = member.Password,
                    Email = member.Email    
                };
                _context1.Members.Add(product);
                _context1.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Msg = "註冊失敗";
            return View(member);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}