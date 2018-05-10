package com.revature.pojo;

import com.revature.abstracts.Growable;
import com.revature.abstracts.Shape;

public class Circle extends Shape implements Growable{

		public void decreaseSideLength(){
			System.out.println("decreasing sides");
		}
		
		@Override
		public void doubleSize(){
			sideLength *=2;
			
		}
		
		@Override
		public void tripleSize(){
			sideLength *=3;
		}
}
