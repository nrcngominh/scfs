package com.example.sfcs_hcmut.views.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.sfcs_hcmut.R;
import com.example.sfcs_hcmut.models.CartItem;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;

public class CartAdapter extends ArrayAdapter<CartItem> {
    private Context _context;
    private int _resource;

    public CartAdapter(@NonNull Context context, int resource, @NonNull ArrayList<CartItem> objects) {
        super(context, resource, objects);
        _context = context;
        _resource = resource;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        LayoutInflater layout = LayoutInflater.from(_context);
        convertView = layout.inflate(_resource, parent, false);

        TextView nameText = (TextView) convertView.findViewById(R.id.nameOfItemInCartText);
        TextView quantityText = (TextView) convertView.findViewById(R.id.quantityOfItemInCartText);
        TextView priceText = (TextView) convertView.findViewById(R.id.priceOfItemInCartText);
        TextView moneyText = (TextView) convertView.findViewById(R.id.moneyOfItemInCartText);

        nameText.setText(getItem(position).getFood().getName());
        quantityText.setText(NumberFormat.getNumberInstance(Locale.GERMAN).format(getItem(position).getQuantity()));
        priceText.setText(NumberFormat.getNumberInstance(Locale.GERMAN).format(getItem(position).getFood().getPrice()));
        moneyText.setText(NumberFormat.getNumberInstance(Locale.GERMAN).format(getItem(position).getMoney()));
        return convertView;
    }
}
