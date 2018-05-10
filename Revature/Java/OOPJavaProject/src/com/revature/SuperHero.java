package com.revature;

//POJO
public class SuperHero implements Flyable {

	
	/*
	 * Access Modifiers keywords:
	 * 		-private: ONLY THIS CLASS
	 * 		-not specify (default when no modifier is used)
	 * 		-protected
	 * 		-public: Available to any other developer with source code
	 */
	
	
	//State
	private int id;
	private String name;
	boolean cape;
	boolean isSideKick;
	String power;
	String weakness;
	String catchPhrase;
	static String team="Avengers";
	
	//No-args Constructor
	public SuperHero(){
		System.out.println("Creating a superhero");
		
	}
	
	
	
	//this keyword= references the current object
	public SuperHero(int id, String name, boolean cape, boolean isSideKick, String power, String weakness,
			String catchPhrase) {
		super();
		this.id = id;
		this.name = name;
		this.cape = cape;
		this.isSideKick = isSideKick;
		this.power = power;
		this.weakness = weakness;
		this.catchPhrase = catchPhrase;
	}
	
	
	
	
	//Behavior
	public void fight(){
		System.out.println("I am fighting");
	}
	
	//static method using static variable, Can't use instance variable
	public void usePower(){
		System.out.println(name+" power go");
	}
	
	//Encapsulation- Restrict Access by providing a channel for them to use
	//Setters and Getters
	public String getName(){
		return this.name;
	}
	
	public void setName(String name){
		if(name.length() > 10){
			this.name="Nah";
		}
		else{
			this.name=name;
		}
	}
	
	
	//override toString();
	@Override
	public String toString() {
		return "SuperHero [id=" + id + ", name=" + name + ", cape=" + cape + ", isSideKick=" + isSideKick + ", power="
				+ power + ", weakness=" + weakness + ", catchPhrase=" + catchPhrase + "]";
		}



	@Override
	public void takeFlight() {
		System.out.println("Up up and away");
	}



	@Override
	public void superHeroLanding() {
		System.out.println(name +" hurts knees on landing");
	}
	
	}
