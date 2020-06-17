package com.example.sfcs_hcmut.views;

import android.graphics.Bitmap;

import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;

import java.util.ArrayList;

public interface IMainView {
    void setMenu(ArrayList<Food> foods);

    void setCart(ArrayList<CartItem> cartItems);

    void setTotalMoney(String totalMoney);

    void showQrCode(Bitmap qrCodeBitmap);

    void showPaymentMessage(String message);

    void setCurrentItemName(String name);
}
