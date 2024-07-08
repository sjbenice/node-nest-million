import { Controller, Patch, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private usersService: UserService) {}

    @Get()
    getCurrentTime(): string {
      const currentTime = new Date().toLocaleTimeString();
      console.log(`Current time is: ${currentTime}`);
      return `Current time is: ${currentTime}`;
    }
  
    @Patch('/reset-problems')
    async resetUserProblems() {
        this.getCurrentTime();
        const count = await this.usersService.resetProblems();
        this.getCurrentTime();
        return { message: `Problems reset for ${count} users` };
    }

    @Patch('/bulk-reset-problems')
    async bulkResetUserProblems() {
        this.getCurrentTime();
        const count = await this.usersService.bulkResetProblems();
        this.getCurrentTime();
        console.log(count);
        return { message: `Problems reset for ${count} users` };
    }
}
