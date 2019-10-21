using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebExperience.Test.Startup))]
namespace WebExperience.Test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
