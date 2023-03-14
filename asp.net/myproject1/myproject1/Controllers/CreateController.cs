using Microsoft.AspNetCore.Mvc;
using myproject1.Models;
using System.ComponentModel.DataAnnotations;

namespace myproject1.Controllers
{
    public class CreateController : Controller
    {
        [HttpPost]
        public IActionResult Createmember(IronMode obj)
        {
            if (ModelState.IsValid) 
            {
                //做存入資料庫的動作
                
                //導回首頁
                return RedirectToAction(nameof(Index));
            }
            return RedirectToAction(nameof(Create));
        }
        public IActionResult Create()
        {
            return View();
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
