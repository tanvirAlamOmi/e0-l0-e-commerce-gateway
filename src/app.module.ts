import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './model/users/users.module';
import { AuthModule } from './model/auth/auth.module';
import { ProductsModule } from './model/inventory/products/products.module';
import { OrdersModule } from './model/orders/orders.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
