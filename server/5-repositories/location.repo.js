import Repository from "./repository.js";
import Location from "../models/location.model.js";

class LocationRepository extends Repository {
    constructor() {
        super(Location);
    }
    
   async getAll(queryParameters) {
    const aggregationPipeline = [  
       {
          $lookup: {
             from: 'discrits',
             localField: 'districtCode',
             foreignField: '_id',
             as: 'districtDetails'
          }
       },
       {
          $unwind: {
             path: '$districtDetails',
             preserveNullAndEmptyArrays: true
          }
       },
       {
        $addFields: {
           discrit: '$districtDetails.name'
        }
     },
       {
          $project: {
            _id: 0,
            city: 1,
            discrit:1
         }
       }
    ];  
    const res = await this.model.aggregate(aggregationPipeline).exec();
    console.log(res);
    return res;
 }
}
export default new LocationRepository();