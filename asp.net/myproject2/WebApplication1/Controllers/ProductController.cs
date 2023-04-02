using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Models.ViewModels;

namespace WebApplication1.Controllers
{
    public class ProductController : Controller
    {
        private readonly ProductContext _context;
        public ProductController(ProductContext context) 
        { 
            _context = context;
        }

        public IActionResult Index( string name)
        {
            ViewBag.name  = name;
            var data = _context.Prodects.ToList();
            var file1 = _context.Files.ToList();
            for (int i = 0; i < data.Count; i++)
            {
                for (int j = 0; j < file1.Count; j++)
                {
                    if (data[i].FileId == file1[j].Id)
                    {
                        data[i].FileId = file1[j].Name;
                    }
                }
            }
            return View(data);
        }

        public IActionResult AddProduct()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> AddProduct(AddProductViewModel productViewModel)
        {
            if (ModelState.IsValid)
            {
                //取得使用者上傳檔案的原始檔名
                var fileOriginName = Path.GetFileName(productViewModel.File.FileName);
                //取原始檔名中的副檔名
                var fileExt = Path.GetExtension(fileOriginName);
                //為避免使用者上傳的檔案名稱發生重複，重新給一個亂數名稱
                var fileNewName = Path.GetRandomFileName();
                //指定要寫入的路徑、檔名和副檔名
                var filePath = "C:/Users/abc04/Desktop/asp.net/myproject2/WebApplication1/wwwroot/lib/data/" + fileNewName + fileExt;

                //將使用者上傳的檔案寫入到指定路徑
                await using (var stream = System.IO.File.Create(filePath))
                {
                    //執行寫入
                    await productViewModel.File.CopyToAsync(stream);
                }
                var file = new Models.File()
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = fileNewName + fileExt
                };

                var last = _context.Prodects.OrderByDescending(d => d.Id).FirstOrDefault();
                if (last == null)
                {
                    var product = new Prodect()
                    {
                        Id = 1,
                        Name = productViewModel.Name,
                        Price = productViewModel.Price,
                        FileId = file.Id
                    };
                    _context.Prodects.Add(product);
                }
                else 
                {
                    var product = new Prodect()
                    {
                        Id = last.Id + 1,
                        Name = productViewModel.Name,
                        Price = productViewModel.Price,
                        FileId = file.Id
                    };
                    _context.Prodects.Add(product);
                }
                _context.Files.Add(file);
                _context.SaveChanges();

                return RedirectToAction("Index");
            }
            return View(productViewModel);
        }

        /*public IActionResult AddProduct(Prodect product)//新增功能
        {
        if (ModelState.IsValid)//ModelState.IsValid會因為空值(id等等)或不符合規則改為false
        { 
        var last = _context.Prodects.OrderByDescending(d => d.Id).FirstOrDefault();
        product.Id = last.Id + 1;
        _context.Prodects.Add(product);
        _context.SaveChanges();
        return RedirectToAction("Index");
        }
        return View(product);
        }*/
        [HttpGet]
        public IActionResult DeleteProduct(int ID)//刪除功能確認刪除案件
        {
            var data = _context.Prodects.FirstOrDefault(d => d.Id == ID);
            return View(data);
        }

        [HttpPost]
        public IActionResult TODeleteProduct(int ID)//回傳回來執行刪除功能
        {
            var data = _context.Prodects.FirstOrDefault(d => d.Id == ID);

            if (data != null)
            { 
                _context.Prodects.Remove(data);
                _context.SaveChanges();
            }
            return RedirectToAction("Index");
        }
        public IActionResult GetProduct(int ID)//產品細節
        {
            var data = _context.Prodects.FirstOrDefault(d => d.Id == ID);
            return View(data);
        }
       
        public IActionResult UpdateProduct(int ID)//案修改後跑來得Action
        {
            var data = _context.Prodects.FirstOrDefault(d => d.Id == ID);
            return View(data);
        }
        [HttpPost]
        public IActionResult UpdateProduct(Prodect product)//(int ID,string Name,decimal Price) 從UpdateProduct頁面 HttpPost回傳回來
        {
            var data = _context.Prodects.FirstOrDefault(d => d.Id == product.Id);

            if (data != null) 
            { 
                data.Name = product.Name;
                data.Price = product.Price;
                _context.SaveChanges();
            }


            return RedirectToAction("Index");
        }
    }
}
