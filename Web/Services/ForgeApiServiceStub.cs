using System.Text.Json;
using Domain.Model;

namespace ForgeUI.Services;

public class ForgeApiServiceStub : IForgeApiService
{
    public Task<string> GetTest()
    {
        throw new NotImplementedException();
    }

    public Task<string> GetPage(int projectId, int page)
    {
        using var json =  File.OpenRead("~/App_Data/pages.json");
        var response = JsonSerializer.Deserialize<Page>(json, new JsonSerializerOptions());
        return Task.FromResult("");
    }
}
