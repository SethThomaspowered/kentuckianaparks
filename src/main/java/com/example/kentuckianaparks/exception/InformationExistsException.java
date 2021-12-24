package com.example.kentuckianaparks.exception;

public class InformationExistsException extends RuntimeException{
    public InformationExistsException(String message){
        super(message);
    }
}
