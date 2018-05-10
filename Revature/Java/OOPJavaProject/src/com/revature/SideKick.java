package com.revature;

public class SideKick extends SuperHero{
	//is-a-rule
	
	//State
	boolean tights;
	String mentor;
	int age;
	
	//No-args
	//Concrete= Methods with a body
	public SideKick(){
		System.out.println("Creating a SideKick");
	}
	
	//Behavior
	public void standInTheBackground(){
		System.out.println("Standing...");
	}
	
	@Override
	public void fight() {
		System.out.println(super.getName() + " is fighting but losing...");
	}
	
	@Override
	public String getName() {
		// super keyword= parent class;
		return super.getName();
	}

	@Override
	public String toString() {
		return "SideKick [tights=" + tights + ", mentor=" + mentor + ", age=" + age + "]";
	}
	
	
	
}
