package com.example.kentuckianaparks.exception;

public class InformationNotFoundException extends RuntimeException{
    public InformationNotFoundException(String message){
        super(message);
    }
}
