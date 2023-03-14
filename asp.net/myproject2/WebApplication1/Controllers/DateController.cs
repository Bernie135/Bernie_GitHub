using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class DateController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Time()
        {
            return Content (DateTime.Now.ToString());
        }
    }
}
