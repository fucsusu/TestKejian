package com.example.fucc.myapplication.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.example.fucc.myapplication.R;

public class ThreadActivity extends AppCompatActivity {

    private int tickets = 40;

    public void btnClick(View view) {
        switch (view.getId()) {
            case R.id.btn_click:
                startActivity(new Intent(ThreadActivity.this, MainActivity.class));
                break;
        }
    }

    private Object test = new Object();

    private class MyThread extends Thread {
        private String name;

        public MyThread(String name1) {
            this.name = name1;
        }

        @Override
        public void run() {
            while (tickets > 0) {
                saleTicket(name);
                try {
                    Thread.sleep(1000);//卖票速度是1s一张
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        }
    }

    private synchronized void saleTicket(String name) {
        try {
            if (tickets < 20 && tickets > 15 && name.equals("窗口1")) {
                Log.e("aaaaaaaa", "run: 票还多着呢 让窗口2多干会");
                Thread.yield();
            } else if (tickets < 10 && name.equals("窗口2")) {
                Log.e("aaaaaaaa", "saleTicket: 累死我了不干了 ");
                this.wait();
            } else {
                tickets--;
                Log.e("aaaaaaaa", "run: " + name + "卖掉了1张票，剩余票数为:" + tickets);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private class MyThreadRun implements Runnable {

        private int ticket = 100;

        @Override
        public void run() {
            while (ticket > 0) {
                synchronized (MyThreadRun.class) {
                    ticket--;
                    Log.e("aaaaaaaa", "run: " + Thread.currentThread().getName() + "卖掉了1张票，剩余票数为:" + ticket);
                }

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private class WaitThread extends Thread {
        @Override
        public void run() {
            synchronized (test) {
                try {
                    Thread.sleep(3000);
                    Log.e("aaaaaaaWaitThread", "run: " + System.currentTimeMillis());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        }
    }

    private class WaitThread2 extends Thread {
        @Override
        public void run() {
            synchronized (test) {
                try {
                    Thread.sleep(3000);
                    Log.e("aaaaaaaWaitThread2", "run: " + System.currentTimeMillis());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thread);

//        MyThreadRun myThreadRun = new MyThreadRun();
//        Thread chuangkou1 = new Thread(myThreadRun, "窗口1");
//        Thread chuangkou2 = new Thread(myThreadRun, "窗口2");
//        chuangkou1.setPriority(1);
//        chuangkou2.setPriority(10);
//        chuangkou1.start();
//        chuangkou2.start();

        Log.e("aaaaaaaa", "onCreate: "+System.currentTimeMillis() );
        new WaitThread().start();
        new WaitThread2().start();
    }
}
