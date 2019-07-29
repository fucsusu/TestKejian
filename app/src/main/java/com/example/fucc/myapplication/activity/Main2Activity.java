package com.example.fucc.myapplication.activity;

import android.animation.ValueAnimator;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.fucc.myapplication.R;
import com.example.fucc.myapplication.view.MyLoadImage;

public class Main2Activity extends AppCompatActivity {


    public MyLoadImage mload;
    private float progress = (float) 0;
    boolean isStart = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        mload = findViewById(R.id.load_img);
        myThread.start();
    }

    Thread myThread = new Thread() {
        @Override
        public void run() {
            super.run();
            while (progress <= 1) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                Log.e("aaaaa", "run: "+progress );
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        progress = progress + 0.1f;
                    }
                });

            }
        }
    };
}
