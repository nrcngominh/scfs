package com.example.sfcs_hcmut.views;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.sfcs_hcmut.R;
import com.example.sfcs_hcmut.di.DaggerApplicationComponent;
import com.example.sfcs_hcmut.models.CartItem;
import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.presenters.IMainPresenter;
import com.example.sfcs_hcmut.views.adapters.CartAdapter;
import com.example.sfcs_hcmut.views.adapters.MenuAdapter;

import java.util.ArrayList;

import javax.inject.Inject;

public class MainActivity extends AppCompatActivity implements IMainView {

    public IMainPresenter presenter;

    MenuAdapter menuAdapter;
    CartAdapter cartAdapter;
    TextView totalPriceText;
    ImageView qrCodeImage;
    TextView paymentMessageText;
    TextView selectedItemNameText;
    ListView cartListView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Inject dependency
        presenter = DaggerApplicationComponent.create().injectPresenter();

        presenter.setView(this);
        menuAdapter = new MenuAdapter(this, R.layout.layout_menu, new ArrayList<Food>());
        cartAdapter = new CartAdapter(this, R.layout.layout_cart, new ArrayList<CartItem>());

        GridView foodGridView = findViewById(R.id.foodGridView);
        foodGridView.setAdapter(menuAdapter);
        presenter.getMenuFoods();

        cartListView = findViewById(R.id.cartListView);
        cartListView.setAdapter(cartAdapter);
        cartListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                presenter.selectItemInCart(position);
            }
        });

        totalPriceText = findViewById(R.id.totalMoneyText);
        paymentMessageText = findViewById(R.id.paymentMessageText);
        qrCodeImage = findViewById(R.id.qrCodeImage);

        Button checkoutButton = findViewById(R.id.checkoutButton);
        checkoutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.checkout();
            }
        });
        selectedItemNameText = findViewById(R.id.selectedItemNameText);

        Button increaseButton = findViewById(R.id.increaseButton);
        Button decreaseButton = findViewById(R.id.decreaseButton);
        Button removeButton = findViewById(R.id.removeButton);
        Button newOrderButton = findViewById(R.id.newOrderButton);
        Button cancelButton = findViewById(R.id.cancelButton);


        increaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.increaseQuantityOfSelectedItem();
            }
        });

        decreaseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.decreaseQuantityOfSelectedItem();
            }
        });

        removeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.removeSelectedItem();
            }
        });

        newOrderButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.newOrder();
            }
        });

        cancelButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                presenter.cancelOrder();
            }
        });


    }

    @Override
    public void setMenu(final ArrayList<Food> foods) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                menuAdapter.clear();
                menuAdapter.addAll(foods);
                menuAdapter.notifyDataSetChanged();
            }
        });
    }

    @Override
    public void setCart(final ArrayList<CartItem> cartItems) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                cartAdapter.clear();
                cartAdapter.addAll(cartItems);
                cartAdapter.notifyDataSetChanged();
            }
        });
    }

    @Override
    public void setTotalMoney(final String totalMoney) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                totalPriceText.setText(totalMoney);
            }
        });
    }

    @Override
    public void showQrCode(final Bitmap qrCodeBitmap) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                qrCodeImage.setImageBitmap(qrCodeBitmap);
            }
        });
    }

    @Override
    public void showPaymentMessage(final String message) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                paymentMessageText.setText(message);
            }
        });
    }

    public void addFoodOnClickHandler(int index) {
        presenter.addFoodToCart(index);
    }

    @Override
    public void setCurrentItemName(final String name) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                selectedItemNameText.setText(name);
            }
        });
    }
}