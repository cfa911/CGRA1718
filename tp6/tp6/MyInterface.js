 
class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor () {
 		super();
		
 	}
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// add a button:
		// the first parameter is the object that is being controlled (in this case the scene)
		// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
		// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

		//this.gui.add(this.scene, 'doSomething');	

		// add a group of controls (and open/expand by defult)

		//var group=this.gui.addFolder("Options");
		var lightsGroup = this.gui.addFolder("Lighting Management");
		lightsGroup.close();

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;

		lightsGroup.add(this.scene, 'Lights1');
		lightsGroup.add(this.scene, 'Lights2');
		
		this.gui.add(this.scene, 'AxisSwitch');
		this.gui.add(this.scene, 'SliderCraneManipulation');
	

		// must be a numeric variable of the scene, initialized in scene.init e.g.
		 this.Horizontal = 2 ;
		 this.Vertical = 2;
		// min and max values can be specified as parameters

		
		this.gui.add(this.scene, 'Horizontal', 0, 360);
		this.gui.add(this.scene, 'Vertical', -4, 12);
	
		this.gui.add(this.scene, 'currentAppearance', this.scene.vehicleAppearanceList );
	
		this.initKeys();

		return true;
		
		
	};

	/**
	 * processKeyboard
	 * @param event {Event}
	 */
	// processKeyboard(event) {
		// // call CGFinterface default code (omit if you want to override)
		// super.processKeyboard(event);

		// // Check key codes e.g. here: http://www.asciitable.com/
		// // or use String.fromCharCode(event.keyCode) to compare chars

		// // for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
		// switch (event.keyCode)
		// {
			// case (65):	// only works for capital 'A', as it is
				// console.log("Key 'A' pressed");
		// };
	// };
	
	
	//Key Processing Unit
			initKeys() {
		this.scene.gui=this;
		this.processKeyboard=function(){};
		this.activeKeys={};
		}
		processKeyDown(event) {
		this.activeKeys[event.code]=true;
		//this.scene.vehicle.move(event.keyCode);
		};
		processKeyUp(event) {
		this.activeKeys[event.code]=false;
		};
		isKeyPressed(keyCode) {
		return this.activeKeys[keyCode] || false;
		}

};
