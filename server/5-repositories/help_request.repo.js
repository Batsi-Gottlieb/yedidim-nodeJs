
import Repository from "./repository.js";
import Help_request from "../models/help_request.model.js";

class Help_requestRepository extends Repository {
   constructor() {
      super(Help_request);
   }

   async getAll(queryParameters) {
      const aggregationPipeline = [
         {
            $match: { idStatus: 81 } // תנאי סינון בסיסי
         },
         {
            $lookup: {
               from: 'locations', // שם הקולקציה של המיקומים
               localField: 'idLocation', // השדה בקולקציית הבקשות שמצביע על הקוד במיקומים
               foreignField: '_id', // השדה בקולקציית המיקומים שמתאים לקוד
               as: 'locationDetails'
            }
         },
         {
            $unwind: {
               path: '$locationDetails',
               preserveNullAndEmptyArrays: true
            }
         },
         {
            $lookup: {
               from: 'discrits',
               localField: 'locationDetails.districtCode', // שדה districtCode בתוך locationDetails
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
               city: '$locationDetails.city', // הוספת העיר
               district: '$districtDetails.name',
            }
         },
         {
            $lookup: {
               from: 'priorityes',
               localField: 'idPriority',
               foreignField: '_id',
               as: 'priorityesDetails'
            }
         },
         {
            $unwind: {
               path: '$priorityesDetails',
               preserveNullAndEmptyArrays: true
            }
         },
         {
            $addFields: {
               priority: '$priorityesDetails.name'
            }
         },
         {
            $lookup: {
               from: 'statuses', // שם הקולקציה של הסטטוסים
               localField: 'idStatus', // השדה בקולקציית הבקשות שמצביע על קוד הסטטוס
               foreignField: '_id', // השדה בקולקציית הסטטוסים שמתאים לקוד הסטטוס
               as: 'statusDetails'
            }
         },
         {
            $unwind: {
               path: '$statusDetails',
               preserveNullAndEmptyArrays: true
            }
         },
         {
            $addFields: {
               status: '$statusDetails.name' // להוסיף את statusName כ-status
            }
         },
         // שלב הוספת נקודת בקרה לוודא שהשדות קיימים
         {
            $project: {
               _id: 1,
               idPriority: 1,
               firstName: 1,
               idLocation: 1,
               district: 1,
               city: 1,
               numberOfPeopleStuck: 1,
               status: 1,
               priority: 1,
               details: 1,
               phone: 1
            }
         }
      ];
      // להוסיף תנאים לחיפוש אם נדרש
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
         if (Object.keys(matchConditions).length > 0) {
            aggregationPipeline.push({
               $match: matchConditions
            });
         }
      }
      const res = await this.model.aggregate(aggregationPipeline).exec();
      //console.log(JSON.stringify(res, null, 2)); // הצגת התוצאות בדיבוג
      console.log(parseInt(queryParameters));
      console.log(res);
      return res;
   }

   // אם המתנדב כבר קיים במערכת, תוצג לו תיבת טקסט בה יקליד את המזהה האישי שלו וילחץ על כפתור "אני מתנדב". פעולה זו תעדכן את מצב הבקשה ל "בטיפול" וקוד מתנדב יתמלא בהתאמה.
   async Ivolunteer(personal_code, id_help_requests) {
      try {
         const updatedRequest = await this.model.findByIdAndUpdate(id_help_requests, { idStatus: 82 });
         if (!updatedRequest) {
            return { status: 404, message: 'Request not found.' };
         }
         const volunteer = await this.volunteer.findOne({ personal_code: personal_code });
         if (!volunteer) {
            throw new Error(`Volunteer with personal code ${personal_code} not found.`);
         }
         await this.model.findByIdAndUpdate(id_help_requests, { idVolunteers: volunteer._id });
         return { message: 'Volunteer assigned successfully' + personal_code + 'is with request num:' + id_help_requests };
      } catch (error) {
         throw new Error(`Error fetching help request: ${error.message}`);
      }
   }

}
export default new Help_requestRepository();
