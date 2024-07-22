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
    async Ivolunteer(personal_code, id_help_requests) {
        return await this.repo.Ivolunteer(personal_code, id_help_requests);
    }

}

export default Service;