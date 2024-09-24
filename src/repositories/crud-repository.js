const { where } = require("sequelize");


class CrudRepository {
     constructor(model) {
          this.model = model;
     }

     async create(data) {
          try {
               const response = await this.model.create(data);
               return response;
          } catch (error) {
               console.log("Something went wrong in repository layer");
               throw error;
          }
     }

     async get() {
          try {
               const response = await this.model.findByPk(data);
               return response;
          } catch (error) {
               console.log("Something went wrong in repository layer");
               throw error;
          }
     }

     async getAll() {
          try {
               const response = await this.model.findAll();
               return response;
          } catch (error) {
               console.log("Something went wrong in repository layer");
               throw error;
          }
     }

     async destroy(data) {
          try {
               const response = await this.model.destroy({
                    where: {
                         id: data
                    }
               })
          } catch (error) {

          }
     }

     async update(data, id) {
          try {
               const response = await this.model.update(data, {
                    where: {
                         id: id
                    }
               })
          } catch (error) {

          }
     }
}

module.exports = CrudRepository;