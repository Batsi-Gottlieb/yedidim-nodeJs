class Service {
    constructor(repo) {
        this.repo = repo;
    }
    async getById(id) {
        return await this.repo.getById(id);
    }
    async getAll(queryParameters) {
        if (queryParameters) {
            return await this.repo.getAll(queryParameters);
        }
        return await this.repo.getAll(queryParameters);
       
    }
    async insert(data) {
        return await this.repo.create(data);
    }
    async delete(id) {
        return await this.repo.delete(id);
    }
  async  Ivolunteer(personal_code, id_help_requests) {
        return await this.repo.Ivolunteer(personal_code, id_help_requests);
    }
    // async getById(id) {
    //     try {
    //         return await this.repo.getById(id);
    //     } catch (error) {
    //         throw new Error(`Error fetching סרוויס with ID ${id}: ${error.message}`);
    //     }
    // }
    









    // async get (queryParameters) {
    //     try {
    //         let filters = {};
    
    //         // if (queryParameters.location) {
    //         //     filters.area = queryParameters.location;
    //         // }
    //         if (queryParameters.status) {
    //             filters.idStatus = queryParameters.status;
    //         }
    //         // if (queryParameters.priority) {
    //         //     filters.idPriority = queryParameters.priority;
    //         // }
    
    //         const helpRequests = await HelpRequest.find(filters)
    //             .populate('idPriority')
    //             .populate('idStatus')
    //             .exec();
    
    //         res.json(helpRequests);
    //     } catch (e) {
    //         next(e);
    //     }
    // };













  
    // async getById(id) {
    //     const userQuery = getByValueQuery('users', 'id');
    //     let result = await executeQuery(userQuery, [id]);
    //     if (result.length == 0) throw new Error("No elements found");
    //     return result;
    

    

    

    // async update(id, data) {
    //     return await this.repo.update(id, data);
    // }

    
}

export default Service;