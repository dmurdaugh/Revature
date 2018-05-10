package com.revature.abstracts;

public abstract class Shape {
	//state
	protected int sides; //protected: restricted to the package and child classes
	protected String name;
	protected int sideLength;
	
	public Shape(){
		
	}
	
	public void increaseSideLength(){
		sideLength += 10;
	}

	public abstract void decreaseSideLength();
	
	
	//Getters and Setters
	

	public int getSides() {
		return sides;
	}

	public void setSides(int sides) {
		this.sides = sides;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getSideLength() {
		return sideLength;
	}

	public void setSideLength(int sideLength) {
		this.sideLength = sideLength;
	}

	
	@Override
	public String toString() {
		return "Shape [sides=" + sides + ", name=" + name + ", sideLength=" + sideLength + "]";
	}

	
}
