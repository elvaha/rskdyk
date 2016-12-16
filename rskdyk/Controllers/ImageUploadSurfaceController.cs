using rskdyk.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Web.Mvc;

namespace rskdyk.Controllers
{
    public class ImageUploadSurfaceController : SurfaceController
    {
        MediaService _mediaService;

        // GET: ImageUploadSurface
        public ActionResult Index()
        {
            return PartialView("_ImageUpload", new ImageUploadModelView());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult HandleImagekUploadForm(ImageUploadModelView model)
        {
            // Create the media item
            var mimage = _mediaService.CreateMedia(model.imageFile.FileName, -1, Constants.Conventions.MediaTypes.Image);
            mimage.SetValue(Constants.Conventions.Media.File, model.imageFile);
            _mediaService.Save(mimage);

            return RedirectToCurrentUmbracoPage();
        }
    }
}