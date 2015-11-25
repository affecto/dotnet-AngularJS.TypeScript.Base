using System.Web.Optimization;

namespace Affecto.AngularJS.TypeScript.Base
{
    public static class BaseBundle
    {
        public static Bundle Create(string virtualPath)
        {
            return new ScriptBundle(virtualPath)
                .IncludeDirectory("~/App/Packages/Base/Controllers", "*.js")
                .IncludeDirectory("~/App/Packages/Base/Exceptions", "*.js")
                .IncludeDirectory("~/App/Packages/Base/Directives", "*.js")
                .IncludeDirectory("~/App/Packages/Base", "*.js");
        }
    }
}