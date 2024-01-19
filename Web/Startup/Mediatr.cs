using System.Reflection;

namespace ForgeUI.Startup;

public static class Mediatr
{
    public static void ConfigureMediatr(this IServiceCollection services)
    {
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
    }
}
