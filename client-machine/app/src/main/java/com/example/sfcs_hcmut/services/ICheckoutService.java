package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.common.enums.CheckoutStatus;

public interface ICheckoutService {
    public String sendOrder(int amount);

    void waitForPaymentSuccess(Runnable action);

    void newOrder();
    CheckoutStatus getCheckoutStatus();
}
