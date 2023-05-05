package com.bigbull.nse;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.facebook.react.bridge.Callback;
import com.bigbull.MainActivity;

public class NseUtil {

    Context context;

    public MainActivity mMainActivity;
    private RequestQueue queue;
    public NseUtil(Context context) {
        this.context = context;
         queue = Volley.newRequestQueue(context);
    }

    public void getAPIResponse(String url, Callback success, Callback errorBridge) {
        StringRequest  mStringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                success.invoke(response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                errorBridge.invoke(error.getMessage());
            }
        });

        queue.add(mStringRequest);
    }
}

