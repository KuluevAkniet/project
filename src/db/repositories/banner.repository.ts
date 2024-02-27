import { InjectRepository } from "@nestjs/typeorm";
import { Banner } from "../entity/banner.entity";
import { BaseRepository } from "src/shared/base/base.repository";
import { Repository } from "typeorm";
import { CreateBannerDto } from "src/modules/banner/dto/create-banner.dto";

export class  BannerRepository extends  BaseRepository<Banner> {
    constructor(
      @InjectRepository(Banner)
      protected readonly repository: Repository<Banner>
    ) {
        super();
    }
    
    async createBanner(dto: CreateBannerDto){
      const banner = await this.repository.create(dto);
      return await this.repository.save(banner)
    }
}