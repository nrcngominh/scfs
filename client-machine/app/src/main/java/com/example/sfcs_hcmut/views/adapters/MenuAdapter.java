package com.example.sfcs_hcmut.views.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.sfcs_hcmut.common.Config;
import com.example.sfcs_hcmut.R;
import com.example.sfcs_hcmut.models.Food;
import com.example.sfcs_hcmut.views.MainActivity;
import com.squareup.picasso.Picasso;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;

public class MenuAdapter extends ArrayAdapter<Food> {
    private Context _context;
    private int _resource;

    public MenuAdapter(@NonNull Context context, int resource, @NonNull ArrayList<Food> objects) {
        super(context, resource, objects);
        _context = context;
        _resource = resource;
    }

    @NonNull
    @Override
    public View getView(final int position, @Nullable View convertView, @NonNull final ViewGroup parent) {
        LayoutInflater layout = LayoutInflater.from(_context);
        convertView = layout.inflate(_resource, parent, false);

        ImageView sample = (ImageView) convertView.findViewById(R.id.sampleImg);
        TextView nameText = (TextView) convertView.findViewById(R.id.nameText);
        TextView priceText = (TextView) convertView.findViewById(R.id.priceText);
        Button addFoodButton = (Button) convertView.findViewById(R.id.addFoodButton);
        addFoodButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((MainActivity) _context).addFoodOnClickHandler(position);
            }
        });

        String url = Config.SERVER_URL + "images/" + getItem(position).getImgUrl();
        Picasso.get().load(url).into(sample);

        nameText.setText(getItem(position).getName());
        priceText.setText("Giá: " + NumberFormat.getNumberInstance(Locale.GERMAN)
                .format(getItem(position).getPrice()));
        return convertView;
    }
}
