using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using AssetDAL;

namespace WebExperience.Test.Controllers
{
    public class AssetController : ApiController
    {
        // TODO
        // Create an API controller via REST to perform all CRUD operations on the asset objects created as part of the CSV processing test
        // Visualize the assets in a paged overview showing the title and created on field
        // Clicking an asset should navigate the user to a detail page showing all properties
        // Any data repository is permitted
        // Use a client MVVM framework

        public List<Asset> GetAssets()
        {
            using (var entities = new AssetInventoryEntities())
            {
                return entities.Assets.ToList();
            }
        }

        public Asset GetAssetById(int id)
        {
            using (var entities = new AssetInventoryEntities())
            {
                var entity = entities.Assets.Find(id);

                return entity;
            }
        }

        [HttpPost]
        public HttpResponseMessage CreateAsset([FromBody]Asset asset)
        {
            try
            {
                using (var entities = new AssetInventoryEntities())
                {
                    asset.CreatedDate = DateTime.Now;
                    entities.Assets.Add(asset);
                    entities.SaveChanges();

                    var message = Request.CreateResponse(System.Net.HttpStatusCode.Created, asset);
                    message.Headers.Location = new Uri(Request.RequestUri + asset.Id.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpDelete]
        public HttpResponseMessage DeleteAsset(int id)
        {
            try
            {
                using (var entities = new AssetInventoryEntities())
                {
                    var entity = entities.Assets.Find(id);

                    if (entity != null)
                    {
                        entities.Assets.Remove(entity);
                        entities.SaveChanges();
                        return Request.CreateResponse(System.Net.HttpStatusCode.OK);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(System.Net.HttpStatusCode.NotFound, "Asset with Id = " + id.ToString() + " not found");
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex);
            }            
        }

        [HttpPut]
        public HttpResponseMessage UpdateAsset(int id, [FromBody]Asset asset)
        {
            try
            {
                using (var entities = new AssetInventoryEntities())
                {
                    var entity = entities.Assets.Find(id);

                    if (entity != null)
                    {
                        entity.AssetName = asset.AssetName;
                        entity.AssetDescription = asset.AssetDescription;
                        entity.CreatedDate = asset.CreatedDate;
                        entity.UpdatedDate = DateTime.Now;

                        entities.SaveChanges();
                        return Request.CreateResponse(System.Net.HttpStatusCode.OK,entity);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(System.Net.HttpStatusCode.NotFound, "Asset with Id = " + id.ToString() + " not found");
                    }                        
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
