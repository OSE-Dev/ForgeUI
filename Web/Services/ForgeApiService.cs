using Microsoft.AspNetCore.WebUtilities;

namespace ForgeUI.Services;

public class ForgeApiService : IForgeApiService
{
    private readonly HttpClient _httpClient;

    public ForgeApiService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<string> GetTest()
    {
        var response = await _httpClient.GetAsync("api/test");
        return response.Content.ToString();
    }
    
    public async Task<string> GetPage(int projectId, int page)
    {
        var response = await _httpClient.GetAsync("api/project/edit/page");
        return response.Content.ToString();
    }
}
