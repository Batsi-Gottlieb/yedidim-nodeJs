// import Repository from "./repository.js";
// import Help_request from "../models/help_request.model.js";
// class Help_requestRepository extends Repository {
//    constructor() {
//       super(Help_request);
//    }
//    async getAll(queryParameters) {
//       const aggregationPipeline = [
//          {
//             $lookup: {
//                from: 'priorityes', // שם הקולקציה של  (או העדיפויות)
//                localField: 'idPriority', // השדה בקולקציית הבקשות שמצביע 
//                foreignField: '_id', // השדה בקולקצית המיקומים שמתאים לקוד
//                as: 'priorities',


//                from: 'locations', // שם הקולקציה של  (או העדיפויות)
//                localField: 'idLocation', // השדה בקולקציית הבקשות שמצביע 
//                foreignField: '_id', // השדה בקולקצית המיקומים שמתאים לקוד
//                as: 'location'
//             // } ,
//             // $lookup: {
//             //    from: 'locations', // שם הקולקציה של  (או העדיפויות)
//             //    localField: 'idLocation', // השדה בקולקציית הבקשות שמצביע 
//             //    foreignField: '_id', // השדה בקולקצית המיקומים שמתאים לקוד
//             //    as: 'location'
//             // }
//             }
//        },
       
//          // {
//          //    $unwind: '$priorities',
//          //     // לפצל את המערך שנוצר
//          // }
//          // , 
//          {
//             $match: { idStatus: 80 }
//          }

//       ];
//       // סינון בהתאם ל-queryParameters אם קיימים
//       if (queryParameters) {
//          const matchConditions = {};

//          if (queryParameters.idStatus) {
//             matchConditions.idStatus = parseInt(queryParameters.idStatus); // וודא שהשדה מסוג Number ואז מבצע parseInt
//          }
//          if (queryParameters.idPriority) {
//             matchConditions.idPriority = parseInt(queryParameters.idPriority);
//          }
//          if (queryParameters.idLocation) {
//             matchConditions.idLocation = parseInt(queryParameters.idLocation);
//          }

//          // הוספת תנאי ה-$match לצורך הסינון באגרגציה
//          if (Object.keys(matchConditions).length > 0) {
//             aggregationPipeline.push({
//                $match: matchConditions
//             });
//          }

//       }

//       // ביצוע האגרגציה במודל המתאים
//       debugger
//       const result = await this.model.aggregate(aggregationPipeline).exec();
//       console.log(queryParameters)
//       console.log(result)

//       return result;
//    }
// }
// export default new Help_requestRepository();






// import Repository from "./repository.js";
// import Help_request from "../models/help_request.model.js";

// class Help_requestRepository extends Repository {
//    constructor() {
//       super(Help_request);
//    }

//    async getAll(queryParameters) {
//       const aggregationPipeline = [];

//       // $lookup לקולקצית 'priorities'
//       aggregationPipeline.push({
//          $lookup: {
//             from: 'priorityes', // שם הקולקציה של העדיפויות במסד הנתונים שלך
//             localField: 'idPriority', // השדה בקולקציית הבקשות שמצביע
//             foreignField: '_id', // השדה בקולקצית העדיפויות שמתאים לקוד
//             as: 'priorities'
//          }
//       });

//       // $lookup לקולקצית 'locations'
//       aggregationPipeline.push({
//          $lookup: {
//             from: 'locations', // שם הקולקציה של המיקומים במסד הנתונים שלך
//             localField: 'idLocation', // השדה בקולקציית הבקשות שמצביע
//             foreignField: '_id', // השדה בקולקצית המיקומים שמתאים לקוד
//             as: 'location'
//          }
//       });

//       // $unwind לאחר ה-$lookup
//       aggregationPipeline.push(
//          { $unwind: '$priorities' },
//          { $unwind: '$location' }
//       );

//       // $match לסינון על פי queryParameters
//       if (queryParameters) {
//          const matchConditions = {};

//          if (queryParameters.idStatus) {
//             matchConditions.idStatus = parseInt(queryParameters.idStatus);
//          }
//          if (queryParameters.idPriority) {
//             matchConditions.idPriority = parseInt(queryParameters.idPriority);
//          }
//          if (queryParameters.idLocation) {
//             matchConditions.idLocation = parseInt(queryParameters.idLocation);
//          }

//          // הוספת תנאי ה-$match לסינון באגרגציה אם קיימים תנאים
//          if (Object.keys(matchConditions).length > 0) {
//             aggregationPipeline.push({
//                $match: matchConditions
//             });
//          }
//       }

//       // ביצוע האגרגציה במודל המתאים
//       const result = await this.model.aggregate(aggregationPipeline).exec();
//       console.log(queryParameters);
//       console.log(result);

//       return result;
//    }
// }

// export default new Help_requestRepository();
import Repository from "./repository.js";
import Help_request from "../models/help_request.model.js";

class Help_requestRepository extends Repository {
   constructor() {
      super(Help_request);
   }

   async getAll(queryParameters) {
      const aggregationPipeline = [];

      // $lookup לקולקצית 'priorities'
      aggregationPipeline.push({
         $lookup: {
            from: 'priorities', // שם הקולקציה של העדיפויות במסד הנתונים שלך
            localField: 'idPriority', // השדה בקולקציית הבקשות שמצביע
            foreignField: '_id', // השדה בקולקציה העדיפויות שמתאים לקוד
            as: 'priorities'
         }
      });

      // $lookup לקולקצית 'locations'
      aggregationPipeline.push({
         $lookup: {
            from: 'locations', // שם הקולקציה של המיקומים במסד הנתונים שלך
            localField: 'idLocation', // השדה בקולקציית הבקשות שמצביע
            foreignField: '_id', // השדה בקולקציה המיקומים שמתאים לקוד
            as: 'location'
         }
      });

      // $match לסינון על פי queryParameters
      if (queryParameters) {
         const matchConditions = {};

         if (queryParameters.idStatus) {
            matchConditions.idStatus = parseInt(queryParameters.idStatus);
         }
         if (queryParameters.idPriority) {
            matchConditions.idPriority = parseInt(queryParameters.idPriority);
         }
         if (queryParameters.idLocation) {
            matchConditions.idLocation = parseInt(queryParameters.idLocation);
         }

         // הוספת תנאי ה-$match לסינון באגרגציה אם קיימים תנאים
         if (Object.keys(matchConditions).length > 0) {
            aggregationPipeline.push({
               $match: matchConditions
            });
         }
      }

      // ביצוע האגרגציה במודל המתאים
      const result = await this.model.aggregate(aggregationPipeline).exec();
      console.log(queryParameters);
      console.log(result);

      return result;
   }
}

export default new Help_requestRepository();
