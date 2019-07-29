package com.example.fucc.myapplication.activity;

import android.animation.ValueAnimator;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.RelativeLayout;

import com.example.fucc.myapplication.R;
import com.example.fucc.myapplication.view.AnswerCountDown;
import com.example.fucc.myapplication.view.MikeRateView;
import com.example.fucc.myapplication.view.MyProgressView;

public class ProgressActivity extends AppCompatActivity {

    public MikeRateView mikeRateView;
    public AnswerCountDown answerCountDown;
    public MyProgressView myProgressView;
    private double progress = 1;
    public View bg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test2);

        myProgressView = findViewById(R.id.progress_tiaowen);
        bg = findViewById(R.id.progress_bg);
        mikeRateView = findViewById(R.id.mike_progress);
        answerCountDown = findViewById(R.id.countdown_timer);
    }

    public void btnClick(View view) {
        switch (view.getId()) {
            case R.id.mike_progress:
                mikeRateView.start(6);
                updatePercent(++progress / 10d);
                break;
            case R.id.countdown_timer:
                answerCountDown.startCountDown();
                break;
        }
    }

    public void updatePercent(double percent) {
        final int ivWidth = bg.getWidth();
        RelativeLayout.LayoutParams lp = (RelativeLayout.LayoutParams) myProgressView.getLayoutParams();
        int marginEnd = (int) (percent * ivWidth);
        lp.width = marginEnd;
        myProgressView.setLayoutParams(lp);
        myProgressView.postInvalidate();
    }

}
