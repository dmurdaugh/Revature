package com.Revature;

//POJO = Plain Old Java Object
	// By convention doesn't require anything i.e. doesn't have the main
public class Airplane extends Object {
	//State
	int airplaneId;
	int wheels;
	String brand;
	boolean inFlight;
	
	//Constructor
	//Method Overloading: Same name, different parameters
	public Airplane(){
		System.out.println("This is a no-args constructor");
		airplaneId=10;
		wheels=2;
		brand="american";
		inFlight=false;
		
	}
	public Airplane(int x){
		System.out.println("Creating an airplane object1");
		airplaneId=x;
		wheels=2;
		brand="american";
		inFlight=false;
	}
	
	
	//behavior;
	public void takeOff(){
		inFlight=true;
		System.out.println("Flight Taking Off");
	}
	
	public void land(){
		inFlight=false;
		System.out.println("Coming for a landing");
	}
	@Override
	public String toString() {
		return "Airplane [airplaneId=" + airplaneId + ", wheels=" + wheels + ", brand=" + brand + ", inFlight="
				+ inFlight + "]";
	}
	
	
}
