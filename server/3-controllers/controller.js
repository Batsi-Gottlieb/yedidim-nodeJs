import autoBind from "auto-bind";//otherwise this will be undefined

class Controller {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            //const response = await this.service.getAll(req.query);
            console.log(req.query);    
            const result = await this.service.getAll(req.query);
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }
    async Ivolunteer(req, res, next) {
      try{  const result = await this.service.Ivolunteer(req.params.personal_code, req.params.id_help_requests);
        return res.status(200).json(result);}
        catch (e) { next(e);}
    }
    // async getById(req, res, next) {
       
    //     try {
    //        // const service = new UserService();
    //         const resultItem = await this.service.getById(req.params.id);            
    //         res.status(200).json({ status: 200, data: resultItem });
    //     }
    //     catch (ex) {        
    //         console.log('Users error')    
    //         const err = {}
    //         switch(ex.message)
    //         {
    //             case "No elements found":                    
    //                 err.statusCode = 407;
    //                 break;
    //             default:                    
    //                 err.statusCode = 500;
    //                 break;
    //         }           
    //         err.message = ex;            
    //         next(err)
    //     }
    // }


    async getById(req, res, next) {
        try {
            const id = req.params.id; // שימוש ב-req.params.id כדי לקבל את ה-id מהקישור
            console.log(id);
            
            const result = await this.service.getById(id);
            if (!result) {
                return res.status(404).json({ error: 'Help request not found' });
            }
            return res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }

    async insert(req, res, next) {
        try {
            const newData = req.body;
            const result = await this.service.insert(newData);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }


async delete(req, res, next) {
        const { id } = req.params;

        try {
            const response = await this.service.delete(id);
            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }

}
    // async get(req, res, next) {
    //     try {
    //         const result = await this.service.get(req.query);
    //         return res.status(200).json(result);
    //     } catch (error) {
    //         next(error);
    //     }
    // }





























    // async getHelp_requestsThatInWaiting(req, res, next) {
    //     try {
    //         //const response = await this.service.getAll(req.query);
    //         const result = await this.service.getAll(req.query);
    //         return res.status(200).json(result);
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    
    // async get(req, res, next) {
    //     const { id } = req.params;

    //     try {
    //         const response = await this.service.get(id);
    //         return res.status(response.statusCode).json(response);
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    

    // async update(req, res, next) {
    //     const { id } = req.params;

    //     try {
    //         const response = await this.service.update(id, req.body);
    //         return res.status(response.statusCode).json(response);
    //     } catch (e) {
    //         next(e);
    //     }
    // }

    



export default Controller;
