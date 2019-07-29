package com.example.fucc.myapplication.fragment;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.fucc.myapplication.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class WhiteBoardFragment extends Fragment {


    public WhiteBoardFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_whiteboard, container, false);
    }

}
