package com.example.sfcs_hcmut.services;

import android.util.Log;

import com.example.sfcs_hcmut.common.Config;
import com.github.nkzawa.emitter.Emitter;
import com.github.nkzawa.socketio.client.Manager;
import com.github.nkzawa.socketio.client.Socket;

import java.net.URI;
import java.net.URISyntaxException;

public class SocketSingleton {
    private static class SingletonHolder {
        public static SocketSingleton instance = new SocketSingleton();
    }

    public static SocketSingleton getInstance() {
        return SingletonHolder.instance;
    }

    public Socket getSocket() {
        return socket;
    }
    private Socket socket;

    public SocketSingleton() {
        try {
            Manager manager = new Manager(new URI(Config.SERVER_URL + "socket"));
            socket = manager.socket("/");
            socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                    Log.i("SOCKET", "Connected to server");
                }
            });
            socket.on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                    Log.i("SOCKET", "Disconnected");
                }
            });
            socket.connect();
            /* Fix unknown bug */
//            try {
//                Thread.sleep(100);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }
}
