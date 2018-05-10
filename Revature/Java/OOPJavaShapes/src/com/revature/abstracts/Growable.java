package com.revature.abstracts;

public interface Growable {
	
	public void doubleSize();
	
	public void tripleSize();
	
	//Default = no need to fulfill the contract
	public default void whatever(){
		System.out.println("Concrete method in interface");
	}
	
	public static void staticMethod(){
		System.out.println("I am static growable");
	}
}
