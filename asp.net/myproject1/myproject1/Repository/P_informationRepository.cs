using Dapper;
using Microsoft.Data.SqlClient;
using myproject1.Models;

namespace myproject1.Repository
{
    public class P_informationRepository
    {
        /// <summary>
        /// 連線字串
        /// </summary>
        private readonly string _connectString = @"Server=localhost;Database=person;Trusted_Connection=True;";
        /// <summary>
        /// 查詢卡片列表
        /// </summary>
        /// <returns></returns>
        public IEnumerable<P_information> GetList()
        {
            using(var conn = new SqlConnection(_connectString))
            {
                var result = conn.Query<P_information>("SELECT * FROM P_information");
                return result;
            }
        }
    }
}
