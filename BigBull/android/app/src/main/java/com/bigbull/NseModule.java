package com.bigbull;
import android.util.Log;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.bigbull.nse.NseUtil;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;

public class NseModule extends ReactContextBaseJavaModule {

    ReactApplicationContext context = getReactApplicationContext();
    private NseUtil mNseUtil;

    @ReactMethod(isBlockingSynchronousMethod = true)
    NseModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @NotNull
    @Override
    public String getName() {
        return "NseModule";
    }


    @ReactMethod
    public void getAPIResponse(String event,Callback success, Callback error){
        if(mNseUtil!=null){
            mNseUtil.getAPIResponse(event,success,error);
        }
    }

    @ReactMethod
    public void onBridge(String event) {

        if(mNseUtil==null){
            Log.i("Bridge Working ..... ",""+event);
            mNseUtil = new NseUtil( context);
        }
    }

    @ReactMethod
    public void onDestroy() {
//      mNseUtil.onDestroy();
    }



    @ReactMethod
    public void getDeviceId(Promise promise) {
        try {

            promise.resolve("token");
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }

}
