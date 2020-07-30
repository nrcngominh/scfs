package com.example.sfcs_hcmut.di;

import com.example.sfcs_hcmut.presenters.IMainPresenter;
import com.example.sfcs_hcmut.presenters.MainPresenter;
import com.example.sfcs_hcmut.services.CheckoutService;
import com.example.sfcs_hcmut.services.FoodService;
import com.example.sfcs_hcmut.services.ICheckoutService;
import com.example.sfcs_hcmut.services.IFoodService;
import com.example.sfcs_hcmut.services.IOrderService;
import com.example.sfcs_hcmut.services.IQrService;
import com.example.sfcs_hcmut.services.OrderService;
import com.example.sfcs_hcmut.services.QrService;
import com.example.sfcs_hcmut.views.MainActivity;

import javax.inject.Singleton;

import dagger.Binds;
import dagger.Module;
import dagger.Provides;

@Module
public abstract class ApplicationInjectionModule {
    @Binds
    public abstract IQrService provideIQrService(QrService qrService);

    @Binds
    public abstract IOrderService provideIOrderService(OrderService orderService);

    @Binds
    public abstract IFoodService provideIFoodService(FoodService foodService);

    @Binds
    public abstract ICheckoutService provideICheckoutService(CheckoutService checkoutService);

    @Binds
    public abstract IMainPresenter provideIMainPresenter(MainPresenter mainPresenter);
}
