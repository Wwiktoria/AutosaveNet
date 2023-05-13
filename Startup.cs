using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AutosaveNet.Startup))]
namespace AutosaveNet
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
