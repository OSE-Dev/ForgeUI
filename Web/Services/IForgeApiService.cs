namespace ForgeUI.Services;

public interface IForgeApiService
{
    Task<string> GetTest();
    Task<string> GetPage(int projectId, int page);
}
