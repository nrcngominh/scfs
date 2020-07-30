package com.example.sfcs_hcmut.presenters;

import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.services.CheckoutService;
import com.example.sfcs_hcmut.services.FoodService;
import com.example.sfcs_hcmut.services.ICheckoutService;
import com.example.sfcs_hcmut.services.IFoodService;
import com.example.sfcs_hcmut.services.IOrderService;
import com.example.sfcs_hcmut.services.IQrService;
import com.example.sfcs_hcmut.services.OrderService;
import com.example.sfcs_hcmut.services.QrService;
import com.example.sfcs_hcmut.common.enums.CheckoutStatus;
import com.example.sfcs_hcmut.views.IMainView;
import com.google.zxing.WriterException;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;

import javax.inject.Inject;

public class MainPresenter implements IMainPresenter {
    private IMainView view;
    private IFoodService foodService;
    private IOrderService orderService;
    private ICheckoutService checkoutService;
    private IQrService qrService;

    @Inject
    public MainPresenter(FoodService foodService, OrderService orderService,
                         CheckoutService checkoutService, QrService qrService) {
        this.foodService = foodService;
        this.orderService = orderService;
        this.checkoutService = checkoutService;
        this.qrService = qrService;
    }

    @Override
    public void setView(IMainView view) {
        this.view = view;
    }

    @Override
    public void addFoodToCart(int index) {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.NEW) {
            orderService.addItemToCart(foodService.getMenu().get(index));
            refresh();
        }
    }

    @Override
    public void getMenuFoods() {
        Thread newThread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    foodService.fetchFoodList();
                    view.setMenu(foodService.getMenu());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
        newThread.start();
    }

    @Override
    public void checkout() {
        if (checkoutService.getCheckoutStatus() != CheckoutStatus.NEW) {
            return;
        }
        Thread newThread = new Thread(new Runnable() {
            @Override
            public void run() {
                int totalMoney = orderService.getTotalMoney();
                if (totalMoney > 0) {
                    String qrCode = null;
                    try {
                        qrCode = checkoutService.sendOrder(orderService.getItems());
                        if (qrCode != null) {
                            try {
                                view.showQrCode(qrService.getBitmap(qrCode));
                                view.showPaymentMessage("Quý khách vui lòng quét mã QR bằng ứng dụng MOMO để thanh toán");
                            } catch (WriterException e) {
                                e.printStackTrace();
                            }
                            checkoutService.waitForPaymentSuccess(new Runnable() {
                                @Override
                                public void run() {
                                    if (checkoutService.getCheckoutStatus() == CheckoutStatus.DONE) {
                                        view.showPaymentMessage("Đã thanh toán thành công.");
                                    }
                                }
                            });
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        newThread.start();
    }

    @Override
    public void selectItemInCart(int position) {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.NEW) {
            orderService.setSelectedItemIndex(position);
            refresh();
        }

    }

    @Override
    public void increaseQuantityOfSelectedItem() {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.NEW) {
            orderService.increaseQuantityOfSelectedItem();
            refresh();
        }
    }

    @Override
    public void decreaseQuantityOfSelectedItem() {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.NEW) {
            orderService.decreaseQuantityOfSelectedItem();
            refresh();
        }

    }

    @Override
    public void removeSelectedItem() {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.NEW) {
            orderService.removeSelectedItem();
            refresh();
        }

    }

    @Override
    public void newOrder() {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.PENDING) {
            return;
        }
        orderService.newOrder();
        checkoutService.newOrder();
        refresh();
    }

    @Override
    public void cancelOrder() {
        if (checkoutService.getCheckoutStatus() == CheckoutStatus.PENDING) {
            checkoutService.newOrder();
            refresh();
            view.showPaymentMessage("Đơn hàng đã được hủy");
        }
    }

    private void refresh() {
        view.setCart(orderService.getItems());
        int totalMoney = orderService.getTotalMoney();
        view.setTotalMoney(NumberFormat.getNumberInstance(Locale.GERMAN).format(totalMoney));
        CartItem selectedItem = orderService.getSelectedItem();
        view.setCurrentItemName(selectedItem != null ? selectedItem.getFood().getName() : "");
        view.showPaymentMessage("");
        view.showQrCode(null);
    }
}
