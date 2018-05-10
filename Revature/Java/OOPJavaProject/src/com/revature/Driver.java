package com.revature;

public class Driver {


	
	/*
	 * JVM: Java Virtual Machine
	 * 	-Executes Compile Java Code
	 * 
	 * JRE : Java Runtime Environment
	 * 	-contains the JVM
	 * 	-Also extra feature to execute Java Applications
	 * JDK : Java Development kit
	 * 
	 * 
	 * 4 pillars of OOP
	 * 	-Encapsulation: Restricting random access
	 * 	-Inheritance: Reuse code form another class, parent/child relationship
	 * 	-Abstraction: Abstract Class & Interfaces
	 * 	-Polymorphism: Many forms e.g. Superclass object reference refers to SubClass Object
	 * 	
	 * 
	 * Scope: 4 Scopes
	 * 	-Static aka Class Scope
	 * 	-Object Scope
	 * 	-Method Scope aka parameter Scope
	 * 	-local aka block scope 
	 */
	public static void main(String[] args) {
					//is-a rule try
		Flyable john=new SuperHero();
		john.takeFlight();
		john.superHeroLanding();
	}

}
