package com.revature;

import com.revature.abstracts.Growable;
import com.revature.abstracts.Shape;
import com.revature.pojo.Circle;

public class MainClass {
	/*
	 * Abstract Class vs Interface
	 * 	-Both can't be instantiated
	 * 	-Abstract class can have both conrete and abstract methods
	 * 	-Interfaces have abstract methods by default
	 * 	-Classes can only extend one Abstract class while implementing multiple interfaces
	 * 
	 */

	public static void main(String[] args) {
		System.out.println("main...");
		
		Shape circle= new Circle();
		
		circle.increaseSideLength();
		circle.decreaseSideLength();
		circle.getSideLength();
		
		//casting
		( (Circle) circle).doubleSize();
		/*
		 * Circle downCastCircle= ( (Circle) circle));
		 * downCastCircle.doubleSize();
		 * System.out.println(downCastCircle);
		 */
		System.out.println(circle);
		
		Growable.staticMethod();
	}

}
