package com.example.fucc.myapplication.webactivity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.example.fucc.myapplication.R;
import com.example.fucc.myapplication.activity.WebActivity;

public class WebSelectActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_select);
    }

    public void btnClick(View view) {
        switch (view.getId()) {
            case R.id.webview_btn:
                startActivity(new Intent(this, TestActivity.class));
                break;
            case R.id.tenx5_btn:
                startActivity(new Intent(this, WebActivity.class));
                break;
        }
    }
}
