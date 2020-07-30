package com.example.sfcs_hcmut.services;

import com.example.sfcs_hcmut.common.enums.CheckoutStatus;
import com.example.sfcs_hcmut.models.CartItem;

import java.io.IOException;
import java.util.ArrayList;

public interface ICheckoutService {
    public String sendOrder(ArrayList<CartItem> carts) throws IOException;

    void waitForPaymentSuccess(Runnable action);

    void newOrder();
    CheckoutStatus getCheckoutStatus();
}
