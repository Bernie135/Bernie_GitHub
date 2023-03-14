using System.Data.Common;
using System.Data.SqlClient;

namespace WebApplication1.Models
{
    public class AdoNetDBModel
    {
        private string ConnectionString { get; set; }
        public AdoNetDBModel()
        {
            ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=product;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        }
        public List<Prodect> Get()
        {

            List<Prodect> result = new List<Prodect>();

            using (DbConnection connection = new SqlConnection(this.ConnectionString))
            {
                using (DbCommand command = connection.CreateCommand())
                {
                    command.CommandText = "Select Id, Name, Price From Prodect";
                    connection.Open();
                    DbDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        result.Add(new Prodect
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Name = reader["Name"].ToString(),
                            Price = Convert.ToDecimal(reader["Price"])
                        });
                    }
                    connection.Close();
                }

            }
            return result;
        }
    }
}
