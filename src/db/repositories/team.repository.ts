import { InjectRepository } from "@nestjs/typeorm";
import { Team } from "../entity/team.entity";
import { Repository } from "typeorm";
import { BaseRepository } from "src/shared/base/base.repository";

export class  TeamRepository extends  BaseRepository<Team> {
    constructor(
      @InjectRepository(Team)
      protected readonly repository: Repository<Team>,
    ) {
        super();
    }
    
}