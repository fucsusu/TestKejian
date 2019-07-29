package com.example.fucc.myapplication.view;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.support.annotation.Nullable;
import android.util.AttributeSet;

/**
 * Created by fucc
 * Date: 2019-07-23 10:48
 */
public class MyProgressView extends android.support.v7.widget.AppCompatImageView {

    private Path mClipPath = new Path();


    public MyProgressView(Context context) {
        super(context);
    }

    public MyProgressView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public MyProgressView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }


    @SuppressLint("NewApi")
    @Override
    protected void onDraw(Canvas canvas) {
        mClipPath.reset();
        mClipPath.addRoundRect(0, 0, getWidth(), getHeight(), getHeight() / 2, getHeight() / 2, Path.Direction.CW);
        mClipPath.close();
        canvas.clipPath(mClipPath);
        super.onDraw(canvas);
    }
}
