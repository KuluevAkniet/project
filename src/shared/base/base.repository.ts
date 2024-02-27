import { Repository } from "typeorm";

export abstract class BaseRepository<Entity> {
  protected readonly repository: Repository<Entity>;

  async create(data: any): Promise<Entity | Entity[]> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async findOneByName(data: any, file){
    
    if (!data) {
      throw new Error('Selection conditions are required to find a single row.');
    }
  
    return await this.repository.findOne({
      where: data
    });
  }
  
  async delete(criteria: any){
    return await this.repository.delete(criteria)
  }
}