package com.example.fucc.myapplication.activity;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.WindowManager;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.LinearInterpolator;
import android.widget.ImageView;

import com.example.fucc.myapplication.R;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    private ArrayList<String> nums;
    public AnimationDrawable background;
    public ImageView xing;
    public ImageView jiangbei;
    public View yi;
    public AnimatorSet animSet;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN |
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON |
                WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED);
        setContentView(R.layout.activity_main);

        ImageView send_trophy = findViewById(R.id.send_trophy);
        AnimationDrawable background = (AnimationDrawable) send_trophy.getBackground();
        background.start();

        xing = findViewById(R.id.xing);
        jiangbei = findViewById(R.id.jiangbei);
        yi = findViewById(R.id.yi);
        yi.setAlpha(0);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        showJiangbei(xing, jiangbei, yi);
    }

    //属性动画
    private void showJiangbei(final View xing, final View jiangbei, final View yi) {
        xing.setVisibility(View.VISIBLE);
        jiangbei.setVisibility(View.VISIBLE);
        if (animSet != null) {
            animSet.start();
            return;
        }
        //奖杯放大缩小效果
        ObjectAnimator xingAlpha = ObjectAnimator.ofFloat(xing, "alpha", 0f, 1f, 0f, 1f, 0f);
        ObjectAnimator jianbeiScaleX = ObjectAnimator.ofFloat(jiangbei, "scaleX", 0f, 1.2f, 1f, 1.2f, 1f);
        ObjectAnimator jianbeiScaleY = ObjectAnimator.ofFloat(jiangbei, "scaleY", 0f, 1.2f, 1f, 1.2f, 1f);
        xingAlpha.setDuration(1500);
        jianbeiScaleX.setDuration(1500);
        jianbeiScaleY.setDuration(1500);

        // 移动时效果
        int[] yiLocation = new int[2];
        yi.getLocationInWindow(yiLocation);
        int[] jiangbeiLocation = new int[2];
        jiangbei.getLocationInWindow(jiangbeiLocation);
        ObjectAnimator jBtranslationX = ObjectAnimator.ofFloat(jiangbei, "translationX", 0, yiLocation[0] - jiangbeiLocation[0] - yi.getWidth() / 2);
        ObjectAnimator jBtranslationY = ObjectAnimator.ofFloat(jiangbei, "translationY", 0, yiLocation[1] - jiangbeiLocation[1] - yi.getHeight() / 2);
        jBtranslationX.setInterpolator(new AccelerateInterpolator());
        jBtranslationX.setDuration(800);
        jBtranslationY.setDuration(800);
        ObjectAnimator jBScaleX = ObjectAnimator.ofFloat(jiangbei, "scaleX", 1, 0f);
        ObjectAnimator jBScaleY = ObjectAnimator.ofFloat(jiangbei, "scaleY", 1, 0f);
        jBScaleX.setDuration(800);
        jBScaleY.setDuration(800);
        ObjectAnimator jBAlpha = ObjectAnimator.ofFloat(jiangbei, "alpha", 1f, 0.5f);
        jBAlpha.setInterpolator(new AccelerateInterpolator());
        jBAlpha.setDuration(800);

        //数字动画
        ObjectAnimator yiTransY = ObjectAnimator.ofFloat(yi, "translationY", 0, -150);
        yiTransY.setDuration(600);
        ObjectAnimator yiAlpha = ObjectAnimator.ofFloat(yi, "alpha", 0.2f, 0.8f, 0.2f, 0.2f, 0.8f, 0);
        yiAlpha.setDuration(1300);
        yiTransY.addListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animation) {
                yi.setVisibility(View.VISIBLE);
            }

            @Override
            public void onAnimationEnd(Animator animation) {

            }

            @Override
            public void onAnimationCancel(Animator animation) {

            }

            @Override
            public void onAnimationRepeat(Animator animation) {

            }
        });

        //数字动画
        ObjectAnimator yiTransY2 = ObjectAnimator.ofFloat(yi, "translationY", 0, -150);
        yiTransY2.setDuration(600);
        yiTransY2.setStartDelay(610);

        animSet = new AnimatorSet();
        animSet.setInterpolator(new LinearInterpolator());
        animSet.play(jBtranslationY).with(jBtranslationX).with(jBScaleX).with(jBScaleY)
                .after(xingAlpha).after(jianbeiScaleX).after(jianbeiScaleY)
                .before(yiTransY).before(yiAlpha).before(yiTransY2);
        animSet.start();

        animSet.addListener(new Animator.AnimatorListener() {
            @Override
            public void onAnimationStart(Animator animation) {

            }

            @Override
            public void onAnimationEnd(Animator animation) {
                xing.setVisibility(View.INVISIBLE);
                jiangbei.setVisibility(View.INVISIBLE);
                yi.setVisibility(View.INVISIBLE);
            }

            @Override
            public void onAnimationCancel(Animator animation) {

            }

            @Override
            public void onAnimationRepeat(Animator animation) {

            }
        });
    }

    public void btnClick(View view) {
        showJiangbei(xing, jiangbei, yi);
    }
}
